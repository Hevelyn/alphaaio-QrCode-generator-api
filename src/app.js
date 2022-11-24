const express = require('express')
const cors = require('cors')
const bodyParse = require('body-parser')

const app = express()

app.use(cors())
app.use(bodyParse.json())

// -- ROUTES --
app.use('/', require('./routes/routes'))

const PORT = 3000

app.listen(PORT, console.log(`Server started on port ${PORT}`));