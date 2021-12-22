const express = require('express')
// router - different req have different url and different url have diff handlers which is called routers
const router = express.Router()
const Alien = require('../models/alien')

// we want to fetch data from database- in that case we should send a async request
router.get('/', async(req, res) => {
    // res.send('Get Request')
    try{
        const aliens = await Alien.find()
        res.json(aliens)
    }catch(err){
        res.send('Error' + err)
    }
})


router.post('/', async(req, res) => {
    // object which will accept all the values
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })
    try{
       const a1 = await alien.save()
       res.json(a1);
    }catch(err){
        res.send('Error' + err)
    }
})

// Get request from id
router.get('/:id', async(req, res) => {
    try{
        const alien = await Alien.findById(req.params.id) //getting id by url so params
        res.json(alien)
    }catch(err){
        res.send('Error' + err);
    }
})



module.exports = router