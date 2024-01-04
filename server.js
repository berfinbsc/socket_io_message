const express=require('express')
const app=express()
const socket=require('socket.io')
const port =process.env.PORT

app.use(express.static('public'))

const server=app.listen(port)

const io =socket(server)

io.on('connection',(socket)=>{
    console.log(socket.id)


    socket.on('chat',data=>{
        io.sockets.emit('chat',data)
    })
    
    
    socket.on('typing',(data)=>{
    
        socket.broadcast.emit('typing',data)
    })


})




console.log('server listening')