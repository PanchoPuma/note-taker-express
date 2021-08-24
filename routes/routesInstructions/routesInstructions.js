const router = require('express').Router();
const { notes } = require('../../db/db.json');
const fs = require('fs');
const path = require("path");



//Delete an existing note
function deleteNote(notesArray, id) {
    for (let i = 0; i < notesArray.length; i++) {
        let note = notesArray[i];

        if (note.id == id) {
            notesArray.splice(i, 1);
            fs.writeFileSync(
                path.join(__dirname, '../../db/db.json'),
                JSON.stringify(notesArray, null, 2)
            );

        }
    }
}


//Create a new Note
function newNote(body, notesArray) {
    let note = body;
    if (!Array.isArray(notesArray))
    notesArray = [];

    notesArray.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    )

    return note;
}



module.exports = { newNote, deleteNote };
