import express from 'express'
import path from 'path'
import { createServer } from 'http'
import { Server } from 'socket.io'

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer)

app.get('/', (req, res) => {
  return res.sendFile(path.join(process.cwd(), 'src', 'views', 'index.html'))
})

app.post('/login', (req, res) => {
    const { username, password } = req.body

    

})

io.on('connection', socket => {
  console.log(socket.id)

  socket.on('new message', data => {
    io.emit('message', data)
  })

  socket.on('disconnect', () => {
    console.log('Brat chiqib ketdi!')
  })
})

httpServer.listen(3000, () => console.log('http://localhost:3000'))
