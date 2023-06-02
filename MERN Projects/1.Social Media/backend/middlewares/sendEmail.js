const nodeMailer = require("nodemailer");
require("dotenv").config({ path: "config/.env" });

exports.sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    // host: process.env.SMTP_HOST,
    // port: process.env.SMTP_PORT,
    // service: process.env.SMTP_SERVICE,
    // secure: false,
    // auth: {
    //   user: process.env.SMTP_MAIL,
    //   pass: process.env.SMTP_PASSWD,
    // },
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "8d0c046eeffc4a",
      pass: "1c809d7fb56eec",
    },
  });

  const mailOptions = {
    from: process.env.SMTP_MAIL,
    to: options.to,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};

