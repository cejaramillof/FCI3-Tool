const express = require('express');
const authentication = require('../middleware/authentication');
const {
    add,
    get,
    update,
    remove
} = require('../controllers/candidate');

const router = new express.Router();

router.post('/add', authentication, add);
router.get('/', authentication, get);
router.patch('/:id', authentication, update);
router.delete('/:id', authentication, remove);

module.exports = router;
