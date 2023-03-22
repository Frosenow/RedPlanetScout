const url = require('url')
const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${req.query.rover}/photos?earth_date=${req.query.date}&page=${req.query.page}&per_page=${req.query.per_page}&api_key=${process.env.APIKEY}`)
    .then(apiRes => apiRes.json())
    .then(data => {
        res.status(200).json(data)
    })
    .catch (error => {
        res.status(500).json({error})
    })
})

module.exports = router