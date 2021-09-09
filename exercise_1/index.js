const PORT = 3030;
const express = require("express");

const app = express();

app.get("/", (req,res) => {
    res.send(console.log("Why hello there!"))
});

app.get("/", (req,res) => {
    res.send("🥭 is 🔥");
});

app.get("/app", (req,res) => {
    res.send("I wonder what's wrong with this route 🤔?");
});

app.get("/dog", (req,res) => {
    res.send("Happy 🐶 loves yummy dog food!");
});

app.get("/fruitsmoothie", (req,res) => {
    res.send("A 🥭, 🍍, 🍓 make a wonderful smoothie!");
});

app.listen(PORT, console.log(`Listening on port ${PORT}`));