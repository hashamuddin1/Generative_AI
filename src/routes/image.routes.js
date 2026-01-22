import express from "express";
import { generateImagePrompt } from "../controllers/image.controller.js";

const router = express.Router();
router.post("/generate", generateImagePrompt);
export default router;
