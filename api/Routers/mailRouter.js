require('dotenv').config()
const mailRouter = require('express').Router()
const { json } = require('express')
const nodemailer = require('nodemailer');

mailRouter.post('/', (req, res, next) => {
  const message = req.body

  const transporter = nodemailer.createTransport({
    service: '',
    auth: {
      user: 'info@spartanit.com.ar',
      pass: 'ProyectoSur2022'
    }
  });

  const mailOptions = {
    from: 'Servicio de Mensajería de SpartanIT',
    to: 'info@spartanit.com.ar',
    subject: message.subject,
    text: `
      Nombre del interesado/a: ${message.name}
      Email del interesado/a: ${message.email}
      Teléfono del interesado/a: ${message.phone}
      Asunto por el que se contacta: ${message.subject}
      Motivo por el que se contacta: ${message.motive ?? '--'}
      Mensaje: ${message.message}
    `
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(400).send('Error')
    } else {
      console.log('Mail sent successfully');
      res.status(200).send('Exito')
    }
  });


})


module.exports = mailRouter