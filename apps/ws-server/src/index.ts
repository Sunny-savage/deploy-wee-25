import { WebSocketServer } from "ws";
import { client } from "@repo/db/client";

const websocket = new WebSocketServer({ port: 3001 });

websocket.on("connection", async (ws) => {
  const user = await client.user.create({
    data: {
      username: Math.random().toString(),
      password: Math.random().toString(),
    },
  });
  ws.send(`hey i am connected to the server ${user} `);
});
