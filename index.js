const express = require("express")
const app = express()
const session = require("express-session")

const sessionOptions = {
  secret: "secret",
  resave: false, //* 必ず保存する(変更があるかどうかにかかわらず)
  saveUninitialized: false,
}

app.use(session(sessionOptions))

app.get("/viewcount", (req, res) => {
  if (req.session.count) {
    req.session.count += 1
  } else {
    req.session.count = 1 //* 0じゃだめ
  } //* 自分でプロパティ設定
  // console.log(req.session.count)
  res.send(`${req.session.count}回`)
})

app.get("/register", (req, res) => {
  const { username = "名無し" } = req.query
  req.session.username = username
  res.redirect("/greet")
})

app.get("/greet", (req, res) => {
  const { username} = req.session
  req.session.username = username
  res.send(username)
})

app.listen(3000, () => {
  console.log("port 3000")
})
