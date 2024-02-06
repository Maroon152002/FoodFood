import React from 'react'

export default function Card() {
    return (
        <div>
            <div><div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
                <img src="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fHw%3D" class="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Important text</p>
                    <div className='container'>
                        <select className='m-2 h-100  bg-success rounded'>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}> {i + 1} </option>
                                )
                            })}
                        </select>

                        <select className='m-2 h-100  bg-success rounded'>
                            <option value="half">Half</option>
                            <option value="full">Full</option>
                        </select>

                        <div className='d-inline h-100 fs-5'>
                            Total Price
                        </div>


                    </div>
                    {/* <li href="#" class="btn btn-primary">Go somewhere</li> */}
                </div>
            </div></div>
        </div>
    )
}
