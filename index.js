const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 8080

const corsOptions = {
  origin: '*'
}

app.use(cors(corsOptions))
app.get('/api', (req, res) => res.json({ message: 'hello world' }))

app.listen(port)
