import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "misael.leal.goncalves90@gmail.com", // generated ethereal user
    pass: "wytjarihntqnphgl", // generated ethereal password
  },
});

transporter.verify().then(() => {
  console.log("ready for send emails");
});
