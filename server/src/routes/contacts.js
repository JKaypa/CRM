const express = require('express')
const {createContact, getContacts, deleteContact, updateContact, getById} = require('../controller/handleContact')


const router = express.Router();

router.get("/api/get", getContacts);

router.get('/api/get/:id', getById)

router.post("/api/create", createContact);

router.put('/api/update/:id', updateContact)

router.delete('/api/delete/:id', deleteContact)

module.exports = router;


