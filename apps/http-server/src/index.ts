import express from "express";
import { client } from "@repo/db/client";
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hi there");
});

app.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  const result = await client.user.create({ data: { username, password } });

  res.json({ message: "signup successful", id: result.id });
});

app.listen(3002);
