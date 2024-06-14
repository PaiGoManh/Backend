const express = require('express');
const app = express();

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Welcome, user ${userId}!`);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
