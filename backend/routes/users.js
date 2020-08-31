const router = require('express').Router()
const {list, add} = require('../controllers/users')

router.route('/').get(list)

router.route('/add').post(add)

module.exports = router