// package
const express = require('express');
router = express.Router();

// models
const Product = require("../model/products");

// routes
router.get("/clothes" , async(req,res)=>{
    find_clothes = await Product.find({category : {$regex : "clothes"}})
    res.send(find_clothes)
})

router.get("/design" , async(req,res)=>{
    find_design = await Product.find({category : {$regex : "design"}})
    res.send(find_design)
})

router.get("/pc" , async(req,res)=>{
    find_pc = await Product.find({category : {$regex : "pc"}})
    res.send(find_pc)
})

router.get("/headphone" , async(req,res)=>{
    find_headphone = await Product.find({category : "headphone"})
    res.send(find_headphone)
})

router.get("/phone" , async(req,res)=>{
    find_phone = await Product.find({category : "phone"})
    res.send(find_phone)
})

router.get("/accessories" , async(req,res)=>{
    find_accessories = await Product.find({category : "accessories"})
    res.send(find_accessories)
})

router.get("/body" , async(req,res)=>{
    find_body = await Product.find({category : "body"})
    res.send(find_body)
})

router.get("/network" , async(req,res)=>{
    find_network = await Product.find({category : "network"})
    res.send(find_network)
})

// export routes in app.js
module.exports = router;