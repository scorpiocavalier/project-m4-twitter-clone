const path = require('path')
const express = require('express')
const cors = require('cors')
const { send } = require('process')
const { users, tweets } = require('./data')

const PORT = 31415
const app = express()

app.use(cors())
app.use(express.json())
app.use(require('./routes/profile'))
app.use(require('./routes/tweet'))
app.use(require('./routes/feed'))

app.use('/assets', express.static(path.join(__dirname, 'assets')))

app.get('/api/:handle/profile', (req, res) => {
  const { handle } = req.params
  const user = users.find(user => user.handle === handle)
  res.send("Hello")
})

const server = app.listen(PORT, function () {
  console.info('🌍 Listening on port ' + server.address().port)
})
