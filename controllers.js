const { notes, stringDate } = require("./data");


function getAllNotes(req, res) {
    res.status(200).json(notes);
}

function getSingleNote(req, res) {
    const note = notes.find(
        (n) => n.id === parseInt(req.params.id)
    );

    if (!note) {
        return res.status(404).json({
            message: "Note not found"
        });
    }

    res.status(200).json(note);
}

function createNote(req, res) {
    const newNote = {
        id: notes.length + 1,
        date: stringDate,
        ...req.body
    };

    const { title, body } = req.body;

    if (!title || !body) {
        return res.status(400).json({
            message: "Title and body are required."
        });
    }
    notes.push(newNote);

    res.status(201).json(newNote);
}

function updateNote(req, res) {
    const note = notes.find(
        (n) => n.id === parseInt(req.params.id)
    );

    const { title, body } = req.body;

    if (!note) {
        return res.status(404).json({
            message: "Sorry note not found"
        });
    }

    if (!title || !body) {
        return res.status(400).json({
            message: "Title and body are required."
        });
    }

    Object.assign(note, req.body);

    res.status(200).json(note);
}

function deleteNote(req, res) {
    const id = parseInt(req.params.id);

    const initialLength = notes.length;

    notes = notes.filter((n) => n.id !== id);

    
    if (notes.length === initialLength) {
        return res.status(404).json({
            error: "Not found"
        });
    }

    res.status(204).send();
}


module.exports = {
    getAllNotes,
    getSingleNote,
    createNote,
    updateNote,
    deleteNote
};