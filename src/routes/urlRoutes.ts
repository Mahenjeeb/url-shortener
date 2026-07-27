import express from "express";
import {
  handleClickCount,
  handleShortURL,
  handleURLFromUser,
} from "../controller/url-controller.ts";
const router = express.Router();
router.post("/create", handleURLFromUser);
router.get("/:id", handleShortURL);
router.get("/analytics/:id", handleClickCount);
export default router;
