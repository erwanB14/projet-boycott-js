import cors from "cors";
import express from "express";

const app = express();
app.use(cors());
app.get("/", (req, res) => {
  res.send("tout marche (●'◡'●)");
});

app.listen(4, () => {
  console.log("le serveur marche sur le port 4");
});
