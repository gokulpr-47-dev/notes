import { Router } from "express";
const router = Router();
import { getNotes, createNote } from "../controllers/noteController.js";

router.get("/", getNotes);
router.post("/", createNote);

export default router;
