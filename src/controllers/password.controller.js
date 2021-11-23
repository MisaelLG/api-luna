import User from "../models/User.js";
import jwt from "jsonwebtoken";
import config from "../config.js";
import bcrypt from "bcryptjs";
import { transporter } from "../middlewares/mailer.js";

var newpassword = async (password) => {
  const salt = await bcrypt.genSalt(1);
  return await bcrypt.hash(password, salt);
};

export const forgot = async (req, res, next) => {
  const userFound = await User.findOne({ email: req.body.email });

  if (!userFound)
    return res.status(400).json({ message: "Usuario No Registrado" });

  //token

  const secret = config.SECRET + userFound.id;
  const payload = {
    email: userFound.email,
    id: userFound.id,
  };

  const token = jwt.sign(payload, secret, { expiresIn: "15m" });
  const link = `http://localhost:3000/api/password/reset-password/${userFound.id}/${token}`;
  console.log(link);
  const send = await transporter
    .sendMail({
      from: '"forgot-password 🔐" <misael.leal.goncalves90@gmail.com>', // sender address
      to: userFound.email, // list of receivers
      subject: "forgot-password", // Subject line
      html: `<b>Este es el link para restablecer su contraseña</b>
    <a href="${link}">${link}</a>
    `, // html body
    })
    .then(
      function (value) {
        console.log("succes");
        res.status(200).json({ message: "revisa tu correo electronico" }); // Success!
      },
      function (reason) {
        console.log("error"); // Error!
      }
    );
};

export const reset = async (req, res, next) => {
  const { id, token } = req.params;

  const userFound = await User.findById({ _id: req.params.id });
  console.log(userFound);

  if (!userFound)
    return res.status(400).json({ message: "Usuario No Registrado" });

  //chek

  if (id !== userFound.id) {
    res.send("invalid id...");
    return;
  }

  //is valid

  const secret = config.SECRET + userFound.id;
  try {
    const payload = jwt.verify(token, secret);

    res.render("reset-password", { email: userFound.email });
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
};

export const resetpost = async (req, res, next) => {
  const { id, token } = req.params;
  var { password, password2 } = req.body;

  const userFound = await User.findById({ _id: req.params.id });

  if (!userFound)
    return res.status(400).json({ message: "Usuario No Registrado" });

  if (id !== userFound.id) {
    res.send("invalid id...");
    return;
  }

  const secret = config.SECRET + userFound.id;
  try {
    const payload = jwt.verify(token, secret);

    //valid

    if (password !== password2) {
      res.send("tus contraseña no coninciden");
    }

    await newpassword(password).then((res) => {
      password = res;
    });

    console.log(password);
    userFound.password = password;
    console.log(userFound);

    const updatePassword = await User.findByIdAndUpdate(
      req.params.id,
      userFound,
      {
        new: true,
      }
    );
    res.status(200).render("exito", { email: userFound.email });
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
};
