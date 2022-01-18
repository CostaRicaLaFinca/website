var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");
//var cors = require("cors");
//const creds = require("./config");//eventually store credentials in that file

 var transport = {
	host: "smtp.gmail.com", // Don’t forget to replace with the SMTP host of your provider
	port: 465,
	auth: {
		user: "#",
		pass: "#"
	}
};


 var transporter = nodemailer.createTransport(transport);
transporter.verify((error, success) => {
	if (error) {
		console.log(error);
	} else {
		console.log("Server is ready to take messages");
	}
}); 

router.post("/send", (req, res, next) => {
	var name = req.body.name;
	var email = req.body.email;
	var message = req.body.message;
	var content = `name: ${name} \n email: ${email} \n message: ${message} `;

	console.log(res);

	var mail = {
		from: name,
		to: markus.rutherford1@ethereal.email,
		subject: "New Message from Contact Form",
		text: content
	};

	transporter.sendMail(mail, (err, data) => {
		if (err) {
			res.json({
				status: "fail"
			});
		} else {
			res.json({
				status: "success"
			});
		}
	});
});

const app = express();
//app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(3000);
