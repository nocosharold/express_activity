const express = require("express");
const path = require("path");
const data = require("./data.json");

const app = express();
const port = 8080;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, "/views"));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('*', (req, res) => {
    res.render('notfound');
})

app.listen(port, () => {
    console.log("Listening on port " + port);
});