import authRouter from './routes/auth.js'
import { createServer } from 'http'
import { Server } from 'socket.io'
import express from 'express'
import path from 'path'
import cors from 'cors'

const app = express()
const httpServer = createServer(app)
const io = new Server(httpServer)


app.use(
  cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
  })
)

app.use(express.static(path.join(process.cwd(), 'files')))
app.use(express.json())
app.use('/auth', authRouter)

app.get('/', (req, res) => {
  return res.sendFile(path.join(process.cwd(), 'src', 'views', 'index.html'))
})

io.on('connection', socket => {
  console.log(socket)

  socket.on('new message', data => {
    io.emit('message', data)
  })

  socket.on('disconnect', () => {
    console.log('Brat chiqib ketdi!')
  })
})

httpServer.listen(3000, () => console.log('🚀 Server is running at http://localhost:3000/'))
