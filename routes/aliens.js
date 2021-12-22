const express = require('express')
// router - different req have different url and different url have diff handlers which is called routers
const router = express.Router()

// we want to fetch data from database- in that case we should send a async request
router.get('/', async(req, res) => {
    // res.send('Get Request')
    try{
        
    }catch(err){
        res.send('Error' + err)
    }
})

module.exports = router