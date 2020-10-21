const express = require('express');
const authentication = require('../middleware/authentication');
const {
    login,
    add,
    getProfile,
    update,
    remove
} = require('../controllers/user');

const router = new express.Router();

router.post('/login', login);
router.post('/add', add);
router.get('/', authentication, getProfile);
router.patch('/', authentication, update);
router.delete('/', authentication, remove);

module.exports = router;
