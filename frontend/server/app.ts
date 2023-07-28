// const express = require("express");
// const http = require("http");
// const socketIO = require("socket.io");

// const app = express();
// const server = http.createServer(app);
// const io = socketIO(server);

// io.on("connection", (socket) => {
//   console.log("New client connected");

//   socket.on("disconnect", () => {
//     console.log("Client disconnected");
//   });

//   socket.on("message", (data) => {
//     console.log("Received message:", data);
//     io.emit("message", data);
//   });
// });

// const port = 4000;
// server.listen(port, () => {
//   console.log(`WebSocket server is running on http://localhost:${port}`);
// });
