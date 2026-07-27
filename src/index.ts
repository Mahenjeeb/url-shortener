import express from "express";
import connectDatabase from "./utils/db.ts";
import { config } from "dotenv";
import urlRouter from "./routes/urlRoutes.ts";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
config();
connectDatabase();
const PORT: string | number = process.env.PORT || 5000;
app.get("/", (_, res) => {
  return res.send("Server running!");
});
app.use("/url", urlRouter);
app.listen(PORT, () => {
  console.info(`Listening on port ${PORT} 🟢`);
});
