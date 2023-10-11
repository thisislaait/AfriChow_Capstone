const express = require('express');
const faqs = require('./data/faqs');
const dotenv = require('dotenv');

const app = express();
dotenv.config()

app.get("/", (req,res) => {
    res.send("API is running...")
});

app.get("/api/faqs", (req,res) => {
    res.json(faqs);
});

app.get("/api/faqs/:id", (req,res) => {
    const faq=faqs.find((n)=>n.id === req.params.id);

    res.send(faq);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("server started"));