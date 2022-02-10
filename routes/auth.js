const router = require('express').Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs/dist/bcrypt')
const User = require('../model/User')
const { registerValidation, loginValidation } = require('../validation')



router.post('/register', async (req, res) => {

    //Data validation
    const { error } = registerValidation(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    //Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    //Unique email
    const emailExist = await User.findOne({email: req.body.email})
    if(emailExist) return res.status(400).send('"email" already exsits')

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    })
    try {
        const savedUser = await user.save()
        res.send(savedUser)
    } catch (err) {
        res.status(400).send(err)
    }
})

router.post('/login', async (req, res) => {
    //Data validation
    const { error } = loginValidation(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    //Email exists
    const user = await User.findOne({email: req.body.email})
    if(!user) return res.status(400).send('"email" or "password" is invalid')

    //Correct password
    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if(!validPassword) return res.status(400).send('"email" or "password" is invalid')

    //Create a token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET)
    res.header('auth-token', token).send(token)
})

module.exports = router