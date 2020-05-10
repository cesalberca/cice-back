const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
const port = process.env.PORT || 8080

const corsOptions = {
  origin: '*'
}

let client
let database

app.use(cors(corsOptions))
app.get('/api', async (req, res) => {
  const users = database.collection('users')

  return res.json(await users.find({}).toArray())
})

app.listen(port, () => {
  MongoClient.connect(
    'mongodb://localhost:27017/cice-back',
    { useUnifiedTopology: true },
    (error, mongoClient) => {
      if (error) {
        throw error
      }
      client = mongoClient
      database = client.db('cice-back')
    }
  )
})
