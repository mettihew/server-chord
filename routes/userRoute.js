const { get,  register, signIn, updateDescription, message } = require('../controllers/userCtrl')

const router = require('express').Router()

router.get('/get', get)
router.post('/register', register)
router.post('/sign-in', signIn)
router.put('/des', updateDescription)
router.put('/message', message)

module.exports = router