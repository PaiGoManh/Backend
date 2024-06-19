const express = require('express');
const app = express();
app.use(express.json()); 

app.post('/review', (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).send('Both title and content are required');
    }
    res.status(201).send('Review submitted successfully');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
