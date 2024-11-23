//pw CnqzU9gsnnNI0RbX
//user paulogabriel232323

//connection string : mongodb+srv://paulogabriel232323:<db_password>@dbprac.ob2bh.mongodb.net/?retryWrites=true&w=majority&appName=DBPRAC
const productRoutes = require('./routes/product.route.js')
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const Product = require("./models/product.model.js");

//middleware to accept jsion files when posting
app.use(express.json());


//routes 
app.use("/api/products",productRoutes) 

//res  is what we send to user
//req is what the user sends to us
app.get("/", (req, res) => {
  res.send("Hello World");
});


//connect db with uri link
mongoose
  .connect(
    "mongodb+srv://paulogabriel232323:CnqzU9gsnnNI0RbX@dbprac.ob2bh.mongodb.net/?retryWrites=true&w=majority&appName=DBPRAC"
  )
  .then(() => {
    console.log("Connected Database!");
    app.listen(3000, () => {
      //start server at local host 3000
      console.log("Server is Running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection Failed");
  });
