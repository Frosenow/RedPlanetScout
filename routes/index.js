const url = require('url')
const express = require('express');
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const params = new URLSearchParams({
            [api_key]: process.env.APIKEY,
            ...url.parse(req.url, true).query
    })
        fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${params}`)
        .then(apiRes => apiRes.json())
        .then(data => {
            res.status(200).json(data)
        })
    } catch (error) {
        res.status(500).json({error})
    }
})

module.exports = router