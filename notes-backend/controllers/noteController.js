import Note from "../models/Note.js";

export async function getNotes(req, res, next) {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (err) {
    err.statusCode = 500;
    err.message = "Failed to fetch notes";
    next(err);
  }
}

export async function createNote(req, res, next) {
  try {
    const { heading, note } = req.body;

    if (!heading || !note) {
      const error = new Error("Heading and note content are required");
      error.statusCode = 400;
      throw error;
    }

    const newNote = new Note({ heading, note });
    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (err) {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Failed to create note";
    next(err);
  }
}
