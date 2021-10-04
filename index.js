const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./models/querry");

mongoose.connect(keys.mongooseURI);
const Querry = mongoose.model("querries");

const app = express();
app.get("/search/:question", (req, res) => {
  const doc = Querry.findOne({ querry: req.params.question }).then((doc) => {
    if (doc) {
      doc.counter = doc.counter + 1;
      doc.save();
      res.send({ querry: doc.querry, counter: doc.counter });
    } else {
      new Querry({ querry: req.params.question, counter: 1 }).save();
      res.send("made a new one");
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);



