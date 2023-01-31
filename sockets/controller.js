const socketController = (socket) => {
  console.log("cliente conectado", socket.id);
  socket.on("disconnect", () => {
    console.log("Cliente desconectado", socket.id);
  });
  socket.on("enviar-mensaje", (payload, callback) => {
    // console.log('enviar mensaje desde el server:', payload)
    socket.broadcast.emit("enviar-mensaje", payload); //el servidor de sockets lo envia
    //socket.emit: solo envia el mensaje al cliente que esta enviado
    //socket.broadcast.emit : envia el mensaje a todos los clientes conectados al servidor
    
    const id = 123456;
    callback(id);
  });
};
module.exports = {
  socketController,
};
