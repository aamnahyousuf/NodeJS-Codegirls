import express from "express";
import http from "http";
import { Server } from "socket.io";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('user connected:', socket.id);

  // Join a specific room
  socket.on('join room', (room) => {
    socket.rooms.forEach(r => { if (r !== socket.id) socket.leave(r); }); // leave old rooms
    socket.join(room);
    console.log(`${socket.id} joined room: ${room}`);
  });

  // Broadcast to room if provided, otherwise broadcast to everyone
  socket.on('chat message', ({ msg, room }) => {
    console.log(`message${room ? ` [${room}]` : ''}: ${msg}`);
    if (room) {
      io.to(room).emit('chat message', { msg, room });
    } else {
      io.emit('chat message', { msg, room: null });
    }
  });

  socket.on('disconnect', () => {
    console.log('user disconnected:', socket.id);
  });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});