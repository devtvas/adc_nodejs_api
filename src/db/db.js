const mongoose = require("mongoose");

require('dotenv').config()

const uri = process.env.MONGO_URL

mongoose.Promise = global.Promise;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Local_Mongo conected");
  })
  .catch((error) => {
    console.log(error.message);
    // process.exit(1);
  });
module.exports = mongoose;
