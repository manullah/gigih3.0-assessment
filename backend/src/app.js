const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');

const config = require('./utils/config');
const database = require('./utils/database');
const router = require('./router');
const createSocket = require('./utils/socketIo');

const app = express();
app.use(express.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const server = http.createServer(app); // Create an HTTP server with your app
const io = createSocket(server); // Initialize Socket.IO with the server

app.use('/api/v1', router(io));

app.listen(config.PORT, () => {
  console.log(`Server Started at ${config.PORT}`);
});
