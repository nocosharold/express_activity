const express = require("express");

const app = express();
const port = 3333;

app.get('/', (req, res) => {
    res.send('Welcome to the homepage');
});

app.listen(port, () => {
    console.log("Listening on port " + port);
});