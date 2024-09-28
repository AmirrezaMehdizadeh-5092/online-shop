// package
const express = require('express');
const app = express();
const bodyparser = require("body-parser");
const cors = require('cors');
const mongoose = require("mongoose");
require('dotenv').config();

// database configuration
mongoose.connect("mongodb://localhost/online_shop");
const db = mongoose.connection;
db.once("open", () => {
    console.log("database is connected");
})

// requirements settings
app.set('view engine', 'ejs');
app.set("views", "./views");
app.use(express.json())
app.use(bodyparser.urlencoded([extended = true]));
app.use(express.static("public"));
app.use(cors())
app.set('trust proxy', 1)

// routing
const index = require("./root/index")
const category = require("./root/find_category");
const best_selling = require("./root/best_selling");
const fav = require("./root/favorite");
app.use("/" , index);
app.use("/find_category", category);
app.use("/best_selling", best_selling);
app.use("/favorite", fav);

// run server
app.listen(process.env.port, () => {
    console.log("server is running on port " + process.env.port);
});