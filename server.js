require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const productRoutes = require("./routes/products");

//express initiated
const app = express();

//middleware
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

app.use((req, res, next) => {
  return res.send(req.body);
  next();
});

//Routes
app.use("/api/products", productRoutes);

// Connection with DB
mongoose
  .connect(process.env.MONGO_DB)
  .then(() => {
    console.log("Connected with DB");
    app.listen(process.env.PORT, () => {
      console.log("Listening", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
