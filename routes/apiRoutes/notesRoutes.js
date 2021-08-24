const router = require('express').Router();
const {newNote , deleteNote} = require('../routesInstructions/routesInstructions.js');
const fs = require('fs');
const path = require("path");
const {notes} = require('../../db/db.json');



router.delete('/notes/:id', (req, res) => {
    deleteNote(req.params.id, notes);
    res.json(notes);
})


router.get('/notes', (req, res) => {
    let stored = notes;
    res.json(stored);
})


router.post('/notes', (req, res) => {
    let note = newNote(req.body, notes);
    res.json(note);
})



// router.put('/notes', (req, res) => {
//     //     let note = newNote(req.body, notes);
//     res.json(note);
// })



module.exports = router;