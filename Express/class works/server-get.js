const express = require('express');

const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
    res.status(200).send("Welcome to the server");
});

app.get('/hi', (req, res) => {
    res.status(200);
    res.send("<h2>I'm Rahul</h2>");
});

app.listen(PORT, (error) => {
    if (!error) {
        console.log("Server is Running on port " + PORT);
    } else {
        console.log("Failed to start server: ", error);
    }
});
