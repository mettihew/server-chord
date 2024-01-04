const {avatar, get,  register, signIn, updateDescription, message, deleteMessage, getMessages, getOne, updateMessage } = require('../controllers/userCtrl')

const router = require('express').Router()

router.post('/get-one', getOne)
router.get('/get', get)
router.post('/register', register)
router.post('/sign-in', signIn)
router.put('/des', updateDescription)
router.put('/avatar', avatar)
router.post('/message', message)
router.post('/get-messages', getMessages)
router.post('/delete-message', deleteMessage)
router.post('/update-message', updateMessage)

module.exports = router