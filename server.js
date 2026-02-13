const express = require("express");
const { default: mongoose } = require("mongoose");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("this is home page");
});

//phonebook schema
const phoneBook = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    trim: true,
  },

  email: {
    type: String,
    require: true,
    trim: true,
  },

  phoneNumber: {
    type: Number,
    require: true,
    trim: true,
  },
});

const User = mongoose.model("User", phoneBook);

app.post("/user", (req, res) => {
  console.log(req.body);
  const user = new User(req.body);
  user
    .save()
    .then(() => {
      res.status(201).json({
        message: "data is created",
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message,
      });
    });
});

mongoose
  .connect("mongodb://localhost:27017/")
  .then(() => {
    console.log("mongoDB is connected");
  })
  .catch((err) => {
    console.err(err);
  });

app.listen(4000, () => {
  console.log("port is running on port 4000");
});
