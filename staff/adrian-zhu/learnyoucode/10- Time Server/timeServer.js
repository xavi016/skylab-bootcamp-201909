const net = require('net');

net.createServer((socket)=>{
 let date= new Date();
 socket.end(date.toLocaleDateString());
}).listen(process.argv[2]);