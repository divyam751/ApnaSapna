const { Router } = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../model/User.model");

const userRouter = Router();

userRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res
      .status(400)
      .send({ msg: "All fields are required", status: 400 });
  }

  try {
    const hash = await bcrypt.hash(password, 10);
    const new_user = new UserModel({
      name,
      email,
      password: hash,
    });

    await new_user.save();
    res.status(200).send({ msg: "Signup successful", status: 200 });
  } catch (err) {
    console.error("Error while storing data in DB:", err);
    res.status(500).send({
      msg: "Something went wrong, please try again later",
      status: 500,
    });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .send({ msg: "All fields are required", status: 400 });
  }

  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .send({ msg: "User not found, please signup first", status: 404 });
    }

    const result = await bcrypt.compare(password, user.password);
    if (result) {
      const token = jwt.sign({ user_id: user._id }, process.env.SECRET_KEY, {
        expiresIn: "1h",
      });
      res
        .status(200)
        .send({ msg: "Login successful", token: token, status: 200 });
    } else {
      res
        .status(401)
        .send({ msg: "Login failed, invalid credentials", status: 401 });
    }
  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).send({
      msg: "Something went wrong, please try again later",
      status: 500,
    });
  }
});

module.exports = userRouter;
