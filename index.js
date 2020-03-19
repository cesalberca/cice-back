const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000

const corsOptions = {
  origin: 'http://localhost:3001'
}

app.use(cors(corsOptions))
app.get('/api', (req, res) => res.json({ message: 'hello world' }))

app.listen(port)
