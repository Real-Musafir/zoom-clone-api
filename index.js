const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

const port = 3001;

app.get("/", (req, res) => {
  res.send("hello World");
});

io.on("connection", (socket) => {
  console.log("Someone Connected");
  socket.on("join-room", ({ roomId, userName }) => {
    console.log("User Joined room");
    console.log(roomId);
    console.log(userName);
  });
});

server.listen(port, () => {
  console.log(`Zoom Clone Api listening on localhost:3001`);
});
