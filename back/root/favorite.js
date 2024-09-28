// package
const express = require('express');
router = express.Router();

// models
const Product = require("../model/products");

// routes
router.post("/", async (req, res) => {
    id = req.body.id;
    find_element = await Product.findOne({ _id: id });
    res.send(find_element)
})

// export routes to app.js
module.exports = router;