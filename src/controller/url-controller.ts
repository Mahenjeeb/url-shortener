import URL from "../models/url.ts";
import { nanoid } from "nanoid";
const handleURLFromUser = async (req: any, resp: any): Promise<void> => {
  const { url } = req.body;
  if (!url) return resp.send(400).json({ message: "URL not provided" });
  try {
    const saveURL = await URL.create({
      shortID: nanoid(8),
      redirectURL: url,
    });
    return resp.status(201).json({
      id: saveURL.shortID,
    });
  } catch (error) {
    return resp.status(500).json({ message: error });
  }
};
const handleShortURL = async (req: any, resp: any): Promise<void> => {
  const { id } = req.params;
  if (!id) return resp.send(400).json({ message: "Short URL Not Found" });
  try {
    const url = await URL.findOne({ shortID: { $eq: id } });
    if (!url) return resp.status(404).json({ message: "Short URL Not Found" });
    url.clicked.push({ timestamp: Date.now() });
    await url.save();
    return resp.redirect(url.redirectURL);
  } catch (error) {
    return resp.status(500).json({ message: error });
  }
};

const handleClickCount = async (req: any, resp: any): Promise<void> => {
  const { id } = req.params;
  if (!id) return resp.send(400).json({ message: "Short URL Not Found" });
  try {
    const url = await URL.findOne({ shortID: { $eq: id } });
    if (!url) return resp.status(404).json({ message: "Short URL Not Found" });
    return resp.status(200).json({totalClicked : url.clicked.length})
  } catch (error) {
     return resp.status(500).json({ message: error });
  }
};
export { handleURLFromUser, handleShortURL, handleClickCount };
