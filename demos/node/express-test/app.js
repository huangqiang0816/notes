const express = require('express')
const app = express()

const port = 3000

app.get('/', (req, res) => {
  console.log('req', req);
  
  res.send('Hello World111!')
})
app.get('/test', (req, res) => res.send('Hello World test1!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))