import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.HOST_MAIL,
  port: process.env.EMAIL_PORT,
  secure: false,
  debug: true,
  secureConnection: false,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: true,
  },
});

const sendMail = async (email, subject, html) => {
  try {
    const info = await transporter.sendMail({
      from: process.env.MAIL_USERNAME,
      to: email,
      subject: subject,
      html: await html,  
    });

    // console.log("Your mail response: ", info);
  } catch (error) {
    console.log("Error Generating in send mail utility: ", error.message);
  }
};


export default sendMail;
