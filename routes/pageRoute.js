const router = require('express').Router()

const {Step1, getStep1} = require('../controllers/pageCtrl')

router.get('/get', getStep1)
router.post('/step1', Step1)

module.exports = router

