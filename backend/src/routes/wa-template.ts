import express from "express";
import ash from "express-async-handler";

import WATemplateController from "../controllers/wa-template";

const router = express.Router();
router.post("/", ash(WATemplateController.sendMessage));

export default router;