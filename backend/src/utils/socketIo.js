const socketIO = require('socket.io');
const config = require('./config');

function init(server) {
  const io = socketIO(server, {
    cors: {
      origin: [config.FRONTEND_URL],
      methods: ['GET', 'POST'],
    },
  });

  io.on('connection', socket => {
    console.log('New client connected');

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });

    socket.on('comment', data => {
      console.log('Received message:', data);
    });
  });

  return io;
}

module.exports = init;
