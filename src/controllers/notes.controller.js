const db = require("../config/firebase");
const { Timestamp } = require("firebase-admin/firestore");
const collection = db.collection("notes");

//function to create note
exports.createNote = async (req, res) => {
  try {
    const data = {
      title: req.body.title,
      content: req.body.content,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    };
    const noteRef = await collection.add(data);
    res.status(201).json({ id: noteRef.id, ...data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//function to get all notes
exports.getNotes = async (req, res) => {
  try {
    const snapshot = await collection.get();
    const notes = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(notes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//function to get the single notes
exports.getNoteById = async (req, res) => {
  try {
    const doc = await collection.doc(req.params.id).get();
    if (!doc.exists) return res.status(404).json({ error: "Note not found" });
    res.json({ id: doc.id, ...doc.data() });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//function to update the note
exports.updateNote = async (req, res) => {
  try {
    await collection.doc(req.params.id).update({
      ...req.body,
      updatedAt: Timestamp.now(),
    });
    res.json({ message: "Note updated successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//function to delete the note
exports.deleteNote = async (req, res) => {
  try {
    await collection.doc(req.params.id).delete();
    res.json({ message: "Note deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
