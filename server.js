const express = require('express');
const { env } = require('process');
require('dotenv').config()

const app = express();

app.get('/api/photos', (req, res) => {
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${req.query.rover}/photos?earth_date=${req.query.date}&api_key=${process.env.APIKEY}`
    console.log(url)
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/${req.query.rover}/photos?earth_date=${req.query.date}&api_key=${process.env.APIKEY}`)
    .then(data => data.json())
    .then(data => console.log(data.photos[0]))
})

const PORT = process.env.PORT || 5000; 

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})