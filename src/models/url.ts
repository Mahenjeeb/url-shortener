import { Schema, model } from "mongoose";
const urlSchema = new Schema(
  {
    shortID: { type: String, unique: true, required: true },
    redirectURL: { type: String, required: true },
    clicked: [{ timestamp: { type: Number } }],
  },
  { timestamps: true },
);

const URL = model("url", urlSchema);
export default URL;
