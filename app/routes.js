

const nodemailer = require('nodemailer');


module.exports = (app) => {


	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'infimo000@gmail.com',
			pass: 'bnnhofjlhhlxblca',
		},
	});

	app.post('/send-email', (req, res) => {
		const { name, email, subject, message } = req.body;

		const mailOptions = {
			from: `${email}`,
			replyTo: `${email}`,
			to: 'infimo000@gmail.com',
			subject: 'Mensaje de Contacto',
			text: `Nombre: ${name}\nEmail: ${email}\nAsunto: ${subject}\nMensaje: ${message}`,
		};

		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				console.log(error);

				res.status(500);
			} else {
				console.log('Email enviado: ' + info.response);

				res.status(200).json({ message: 'successful message' });
			}
		});
	});

};