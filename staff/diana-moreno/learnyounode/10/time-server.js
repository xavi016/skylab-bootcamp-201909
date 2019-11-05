const net = require('net')
const { argv: [, , port = 8080] } = process

 const server = net.createServer(socket => {
  socket.on('data')
   // socket.write(data)
   // socket.end(data)
 })
 server.listen(port)

 // end send something and finish the conexion. Write only sends but not closes the conexion