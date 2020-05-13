const express = require('express')

const app = express()

app.use('/img/', express.static('./img/'))

app.get('/home/data', (req, res) => {
  const data = {
    list: [],
  }
  const obj = {
    img: 'http://127.0.0.1:8000/img/hg.jpg',
    title: '胡歌帅照'
  }
  for (var i = 0; i < 30; ++i)
    data.list.push(obj);
  res.header("Access-Control-Allow-Origin", "*");
  res.send(data)
})

app.listen(8000, () => {
  console.log('app is running at port 8000...')
})