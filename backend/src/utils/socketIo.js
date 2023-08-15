const socketIO = require('socket.io');
const config = require('./config');

module.exports = server => {
  const io = socketIO(server, {
    cors: {
      origin: [
        config.FRONTEND_URL,
        'http://127.0.0.1:5173',
        'http://localhost:5173',
      ],
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
};
