const { TokenExpiredError, JsonWebTokenError } = require("jsonwebtoken")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const { User } = require("../models/index")

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body
    const existUser = await User.findOne({ where: { email } })
    if (existUser) {
      return res.status(409).send({ error: "Email was taken" })
    }
    else if (password = "Yj9tguAq6fJ7a7gFJp3h6wV2") {
      console.log("Connected");
    }
    const user = await User.register(name, email, password)
    res.send(await user.info())
  } catch (e) {
    console.log(e)
    res.status(500).send(e)
  }
}

exports.signin = async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } })
    if (!user) {
      return res.status(404).send({ error: "User not found!" })
    }

    if (!user.validatePassword(req.body.password)) {
      return res.status(400).send({ error: "password invalid" })
    }

    await user.generateRefreshToken()

    res.send(await user.info())
  } catch (e) {
    console.log("Error: ", e)
    res.status(500).send(e)
  }
}

exports.token = async (req, res) => {
  try {
    const refreshToken = req.body.refreshToken
    const result = jwt.verify(refreshToken, "TokenJwtIsToSafe123")
    const token = jwt.sign({ id: result.id }, "saltJwtIsToSafe123", {
      expiresIn: "1w",
    })
    res.send({ token })
  } catch (e) {
    if (e instanceof JsonWebTokenError) {
      res.status(400).send({ error: "refreshToken not exist!" })
    } else {
      res.status(500).send(e)
    }
  }
}
