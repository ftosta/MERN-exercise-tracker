const router = require('express').Router()
const {list, add, remove, detail, update} = require('../controllers/exercises')

router.route('/').get(list)

router.route('/add').post(add)

router.route('/:id').get(detail)

router.route('/:id').delete(remove)

router.route('/update/:id').post(update)

module.exports = router

