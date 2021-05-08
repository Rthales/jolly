const express = require("express")
const bodyParser = require("body-parser")
const morgan = require("morgan")
const cors = require('cors')
const authRouter = require("../router/auth")
const userRouter = require("../router/user")
const FormRouter = require("../router/form")
const ResponseRouter = require("../router/response")
const BroadCastRouter = require("../router/broadcast")
const app = express()
app.use(cors())
app.use(bodyParser.json())

app.use(morgan("dev"))

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Jolly Server</h1>")
})

app.use("/api/v1", [
  authRouter,
  userRouter,
  FormRouter,
  ResponseRouter,
  BroadCastRouter,
])

app.listen(3000)

console.log("Server is running on port 3000")
