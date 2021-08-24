const router = require('express').Router();
const {newNote , deleteNote} = require('../routesInstructions/routesInstructions');

const {notes} = require('../../db/db.json');

module.exports = router;