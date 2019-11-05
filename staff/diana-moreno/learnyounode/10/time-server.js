     const net = require('net')
     const server = net.createServer(function(socket) {
       // socket handling logic
       socket.write(data)
       socket.end(data)
     })
     server.listen(8000)