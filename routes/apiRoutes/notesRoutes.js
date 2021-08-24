const router = require('express').Router();
const {newNote , deleteNote} = require('../routesInstructions/routesInstructions');
const fs = require('fs');
const path = require("path");
const {notes} = require('../../db/db.json');








module.exports = router;