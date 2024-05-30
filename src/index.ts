import express, { Request, Response } from "express";

const objRes = [
  { id: 1, name: "julius" },
  { id: 2, name: "Abel" },
];

const app = express();
const port = 5000;

app.get("/", (req: Request, res: Response) => {
  res.status(200);
  res.send(objRes);
});

app.get("/api/${number}", (req, res: Response) => {
  console.log(req);
  res.send("This is my second route");
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
