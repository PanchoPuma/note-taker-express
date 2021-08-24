const router = require('express').Router();
const {newNote , deleteNote} = require('../routesInstructions/routesInstructions');
const fs = require('fs');
const path = require("path");
const {notes} = require('../../db/db.json');



router.delete('/notes/:id', (req, res) => {
    deleteNote(notes, req.params.id);
    res.json(notes);
})


router.get('/notes', (req, res) => {
    let stored = notes;
    res.json(stored);
})


router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    let nuevaNota = newNote(req.body, notes);
    res.json(nuevaNota);
})



// router.put('/notes', (req, res) => {
//     //     let note = newNote(req.body, notes);
//     res.json(note);
// })



module.exports = router;