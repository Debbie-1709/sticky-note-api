const express = require('express');
const app = express();
app.use(express.json()); // Parse JSON bodies


const {
    getAllNotes,
    getSingleNote,
    createNote,
    updateNote,
    deleteNote
} = require("./controllers");







// GET ALL NOTES
app.get("/notes", getAllNotes);

//GET A SINGLE NOTE
app.get("/notes/:id", getSingleNote);


// CREATE NEW NOTE
app.post("/notes", createNote);

// PATCH Update – Partial
app.patch("/notes/:id", updateNote);


//DELETE AN EXISTING NOTE
app.delete("/notes/:id", deleteNote);

//const PORT = process.env.PORT
//app.listen(PORT, () => console.log(`Server on port ${PORT}`));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});