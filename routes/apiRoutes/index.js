const router = require('express').Router();
const notesRoutes = require('../apiRoutes/notesRoutes')
const path = require("path");
const fs = require('fs');
const { notes } = require('../../db/db.json');
const {newNote , deleteNote} = require('../routesInstructions/routesInstructions');


router.use(notesRoutes);

module.exports = router;