const UserModel = require('../models/user.model')

const list = (req, res) => {
    UserModel.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err))
}

const add = (req, res) => {
    const username = req.body.username
    const newUser = new UserModel({username})

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err))
}

module.exports = {list, add}

