import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousel from '../components/Carousel'

export default function Home() {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      }
    });
    response = await response.json();

    setFoodItem(response[0]);
    setFoodCat(response[1]);
    // console.log(response[0], response[1]);

  }

  useEffect(() => {
    loadData()
  }, [])



  return (
    <div >
      <div><Navbar /></div>
      <div><Carousel /></div>

      <div className='container'>
        {/* {
          foodCat !==[]
            ? foodCat.map((data) => {
              return (
                <div>Hello</div>
              )
            : <div>""""</div>
        } */}
        <Card />

      </div>

      <div><Footer/></div>
    </div>
  )
}
