// package
const express = require('express');
router = express.Router();

// models
const Product = require("../model/products");

// routes
router.get("/", async (req, res) => {
    let best_selling = await Product.aggregate(
        [
          { $sort : { commiunity : -1 } }
        ]
     )
    res.send(best_selling);
})

router.get("/phone", async (req, res) => {
    let best_selling = await Product.find({ category: "phone" }).sort({ commiunity: -1 });
    res.send(best_selling);
})

router.get("/pc", async (req, res) => {
    let best_selling = await Product.find({ category: "pc/computer" }).sort({ commiunity: -1 });
    res.send(best_selling);
})

router.get("/headphone", async (req, res) => {
    let best_selling = await Product.find({ category: "headphone" }).sort({ commiunity: -1 });
    res.send(best_selling);
})

router.get("/accessories", async (req, res) => {
    let best_selling = await Product.find({ category: "accessories" }).sort({ commiunity: -1 });
    res.send(best_selling);
})

// export routes to app.js
module.exports = router;