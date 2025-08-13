const express = require("express");
const router = express.Router();
const noteSchema = require("../validators/notes.validators.js");
const {
  createNote,
  getNotes,
  getNoteById,
  updateNote,
  deleteNote,
} = require("../controllers/notes.controller");

router.post("/", async (req, res, next) => {
  const { error } = noteSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  next();
}, createNote);

router.get("/", getNotes);
router.get("/:id", getNoteById);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

module.exports = router;
