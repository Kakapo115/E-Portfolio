const nodemailer = require("nodemailer");
require("dotenv").config();

const sendMail = async (name, email, message) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Your Name" <${process.env.GMAIL_USER}>`,
      to: "SymeRickyWork@gmail.com", // Replace with the email address where you want to receive the emails
      subject: "New Contact Form Submission",
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
    return true;
  } catch (error) {
    console.error("Error sending email: ", error);
    return false;
  }
};

module.exports = sendMail;
