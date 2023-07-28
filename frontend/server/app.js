import express from "express";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
app.use(cors());
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });

  socket.on("comment", (data) => {
    console.log("Received message:", data);
    io.emit("comment", data);
  });
});

const port = 4000;
server.listen(port, () => {
  console.log(`WebSocket server is running on http://localhost:${port}`);
});
