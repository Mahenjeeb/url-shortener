import { log } from "node:console";
import express, { Application, Response } from "express";
import "dotenv/config";

const app: Application = express();
const PORT: number = Number(process.env.PORT) || 5000;
app.use(express.json());
app.get("/", (_, resp: Response) => {
  return resp.status(200).json({ message: "ok" });
});
app.listen(PORT, () => {
  log(`Server is running on http://localhost:${PORT}`);
});