//carregando modules
const express = require('express')
const router = express.Router()
    //adionando module nodemiler responsável por enviar email
const nodemailer = require('nodemailer')

router.get('/', (req, res) => {
    res.send('helow word')
})

//export module
module.exports = router