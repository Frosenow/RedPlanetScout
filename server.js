const express = require('express');
const { env } = require('process');
const cors = require('cors')
require('dotenv').config()

// Run Express
const app = express();

// Enable CORSE
app.use(cors())

// Set static 
app.use(express.static('public'))

// Routes 
app.use('/api', require('./routes'))

const PORT = process.env.PORT || 5000; 

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})