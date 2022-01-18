const express = require('express')
const nodemailer = require('nodemailer');
const app = express();
var router = express.Router();
const port = 3000;

nodemailer.createTestAccount((err, account) => {
	if (err) {
		console.error('Failed to create a testing account. ' + err.message);
		return process.exit(1);
	}

	console.log('Credentials obtained, sending message...');

	const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'markus.rutherford1@ethereal.email',
        pass: 'HZSVExSckgxsac1wqb'
    }
});

	// Message object
	let message = {
		from: '#',
		to: 'markus.rutherford1@ethereal.email',
		subject: 'Nodemailer is unicode friendly ✔',
		text: 'Hello to myself!',
		html: '<p><b>Hello</b> to myself!</p>'
	};

	transporter.sendMail(message, (err, info) => {
		if (err) {
			console.log('Error occurred. ' + err.message);
			return process.exit(1);
		}

		console.log('Message sent: %s', info.messageId);
		// Preview only available when sending through an Ethereal account
		console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
	});
});




app.use(express.json());
app.use("/", router);
app.listen(3000);
//	});
//}