import express from 'express';
import { createServer } from "http";
import { Server, Socket } from 'socket.io'

import "./database";
import { routes } from './routes';

const app = express();

const http = createServer(app);
const io = new Server(http);

io.on("connection", (socket: Socket) => {
    console.log("Socket connected", socket.id)
})

app.use(express.json());

app.use(routes);

http.listen('3333', () => {
    console.log("Sir! The server is running on port 3333!")
})