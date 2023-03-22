const express = require('express');
const { env } = require('process');
const cors = require('cors')
require('dotenv').config()

const PORT = process.env.PORT || 5000; 

// Run Express
const app = express();

// Enable CORSE
app.use(cors())

// Set static 
app.use(express.static('./client/public'))
app.use(express.static('./client/src'))
app.use(express.static('./client/src/components'))

// Routes 
app.use('/api', require('./routes'))

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})