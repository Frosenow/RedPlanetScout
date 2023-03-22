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
app.use(express.static('./client/build'))
app.use(express.static('.client/build/static'))

// Routes 
app.use('/api', require('./routes'))

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})