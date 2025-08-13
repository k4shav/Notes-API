const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const notesRoutes = require("./routes/notes.routes");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Notes API is running");
});

app.use("/notes", notesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
