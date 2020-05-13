const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()

// app.use('/img/', express.static('./img/'))

app.get('/', (req, res) => {
  res.redirect('/echart')
})

app.get('/echart', (req, res) => {
  res.sendFile(path.join(__dirname, '../../front-end/Front-end/echarts/index.html'))
})

app.listen(80, () => {
  console.log('app is running at port 80...')
})