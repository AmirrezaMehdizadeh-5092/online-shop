// package
const express = require('express');
router = express.Router();
const bodyparser = require("body-parser");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const emailValidator = require('deep-email-validator');
const nodemailer = require("nodemailer");
const { query, validationResult } = require('express-validator');
const Isemail = require('isemail');

// models
const Product = require("../model/products");
const subscription = require("../model/subscription");

// routes
router.get("/", async (req, res) => {
    res.send("hello world")
})

router.post("/subscription", async (req, res) => {
    email = req.body.email;
    check_email = Isemail.validate(email)
    if (check_email == false) {
        res.send("Invalid")
    }
    else {
        find = await subscription.findOne({ email: email });
        if (find) {
            res.send("Find")
        }
        else {
            newSubscribe = new subscription({
                email: email
            })
            newSubscribe.save();
            res.send("Record")
        }
    }
})

// export routes to app.js
module.exports = router;