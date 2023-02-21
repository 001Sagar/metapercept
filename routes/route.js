const router = require('express').Router;

const userschema = require('../models/user');
const controller = require('../controllers/user.js');

router.post('/signUp',controller.register);
router.get('/signIn',controller.login);
router.put('/update',controller.update);
router.delete('/',controller.delete)

module.exports = router