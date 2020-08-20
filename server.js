const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    service: 'Hotmail',
    auth: {
        user: 'nome@hotmail.com',
        pass: '*****'
    }
})

transporter.sendMail({
    from: 'Isaac Dsc <nome@hotmail.com>',
    to: 'nome@gmail.com',
    subject: 'Ola, sou Isaac e estou trabalhando com nodemailer',
    text: 'Olá estou gostando bastante da lib nodemailer',
    html: 'Para mais info:<a href="https://www.google.com/search?q=google&rlz=1C1GCEB_enBR891BR891&oq=goog&aqs=chrome.0.69i59j69i57j69i59j69i60l2j69i65l3.471j0j7&sourceid=chrome&ie=UTF-8">Pesquise no google</a>'
}).then((message) => {
    console.log(message)
}).catch((err) => {
    console.log(err)
})
