const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();
require("./db/conn");
const User_Message = require("./models/user_message");

const port = process.env.PORT || 8000;

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../templates/views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../public")));

hbs.registerPartials(path.join(__dirname, "../templates/partials"));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/contact", async (req, res) => {
  try {
    const userData = new User_Message(req.body);
    await userData.save();
    res.status(200).render("index");
  } catch (error) {
    res.status(401).send(error);
  }
});

app.listen(port, () => {
  console.log(`Server Connected To Port No ${port}`);
});
