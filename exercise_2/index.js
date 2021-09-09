const PORT = 3001
const express = require("express")

const app = express()

const es6Renderer = require("express-es6-template-engine")
app.engine("html", es6Renderer);
app.set("views", "templates");
app.set("view engine", "html");

const locations = [
    {cityName: "Houston", continent: "North America"},
    {cityName: "Austin", continent: "North America"},
    {cityName: "Tokyo", continent: "Asia"},
    {cityName: "Berlin", continent: "Europe"},
    {cityName: "Sydney", continent: "Australia"},
    {cityName: "Rio de Janeiro", continent: "South America"},
    {cityName: "Cairo", continent: "Africa"},
    {cityName: "Houston", continent: "North America"},
    {cityName: "Colorado Springs", continent: "North America"},
    {cityName: "Belfast", continent: "Europe"},
];

const myself = {name: "Matthew", city: "Tomball", state:"TX"};

const movies = [
    {movieName: "Inception", poster: `https://m.media-amazon.com/images/I/51bDICODpZL._AC_.jpg`},
    {movieName: "Pulp Fiction", poster: `https://prod.miramax.digital/media/assets/Pulp-Fiction1.png`},
    {movieName: "Interstellar", poster: `https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg`},
    {movieName: "Avengers: Infinity War", poster: `https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg`},
    {movieName: "O Brother, Where Art Thou?", poster: `https://m.media-amazon.com/images/M/MV5BMjZkOTdmMWItOTkyNy00MDdjLTlhNTQtYzU3MzdhZjA0ZDEyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg`},
]

// Write your routes between the ***
// ***
app.get("/message", (req, res) => {
    res.send("Node and express are just lovely")
})

app.get("/locations", (req, res) => {
    res.render("home", {
        locals: {
            locations
        }
    })
});

app.get("/error", (req, res) => {
    res.status(400);
    res.send("Error 400: This is an invalid Route")
});

app.get("/myself", (req, res) => {
    res.send(myself)
});

app.get("/movies", (req, res) => {
    res.render("movie", {
        locals: {
            movies
        }
    })
});


// ***
app.use(express.static("public"));
app.listen(PORT, console.log(`Listening on port ${PORT}`));