const nodeMailer = require("nodemailer");
require("dotenv").config({ path: "config/.env" });

exports.sendEmail = async (options) => {
  const transporter = nodeMailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWD,
    },
    service: process.env.SMTP_SERVICE,
  });

  const mailOptions = {
    from: "anshul127001@gmail.com",
    to: options.to,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};
