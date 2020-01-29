//add modules
const express = require('express')
const app = express()
    //adionando module nodemiler responsável por eviar email
const nodemailer = require('nodemailer')

//adicionando routes
const home = require('./routes/home')
const send = require('./routes/send')


//adionando route
app.use('/', home)


const PORT = 3000
app.listen(PORT, () => {
    console.log(`Servidor iniciado!`)
    console.log(`http://localhost:${PORT}`)
    console.log('BREAK SERVER ctrl + c')
})