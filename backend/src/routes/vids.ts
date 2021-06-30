import express from "express";
import ash from "express-async-handler";

import VidsController from "../controllers/vids";

const router = express.Router();
router.get("/", ash(VidsController.info));

export default router;