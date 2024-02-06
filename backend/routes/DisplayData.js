const express = require('express')
const router = express.Router()

router.post('/foodData', (req, res)=>{ //this line will display data in thunderclient 
    try{
        res.send([global.food_items, global.foodCategory])
    }catch(error){
        console.error(error.message);
        res.send("Server Error")
    }
})

module.exports = router;