const mongoose = require("mongoose");

const mongoDB = "mongodb://127.0.0.1:27017/Portfolio";
mongoose
  .connect(mongoDB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Successfully Connected To Db`);
  })
  .catch((err) => {
    console.log(`This is the Error from DB ${err}`);
  });
