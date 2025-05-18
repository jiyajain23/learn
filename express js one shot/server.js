const express = require('express');
const app = express();

app.listen(3000)
app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))


const userRouter = require("./routes/users")
app.use("/users", userRouter)
