import cors from "cors";
import express from "express";
import { client } from "./prisma";
import { routers as userrouter } from "./user.router";
type message = {
  titre: string;
  userId: string;
};
const app = express();
app.use(cors());
app.get("/", (req, res) => {
  res.send("tout marche (●'◡'●)");
});

app.get("/liste", async (req, res) => {
  const analyse = await client.user.findMany({
    include: {
      todos: true,
    },
  });
  res.json(analyse);
});

app.use("/users", userrouter);
app.listen(4, () => {
  console.log("le serveur marche sur le port 4");
});
