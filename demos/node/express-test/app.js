const express = require('express')
const app = express()

const port = 3000

app.get('/index/:id', (req, res) => {
  console.log(req.params)
  
  res.send('Hello World111!')
})
app.get('/test', (req, res) => res.send('Hello World test1!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))