const path = require('path');
const router = require('express').Router();
const { saveNote } = require('../../public/assets/js/index')
const { notes } = require('../../db/db');

// GET /api/notes should read the db.json file and return all saved notes as JSON.

router.get('/notes', (req, res) => {
    let results = notes;
    if (results) {
        res.json(results);
    } else {
        res.send(404);
    }
  });

// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, 
//and then return the new note to the client. 

router.post('/notes', (req, res) => {
    const notes = saveNote(notes);
    if (notes) {
        res.json(notes);
    } else {
        res.send(404);
    }
  });

// You'll need to find a way to give each note a unique id when it's saved 
//(look into npm packages that could do this for you).


module.exports = router;