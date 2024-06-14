const express = require('express');
const app = express();
app.use(express.json());

const UserInput = (req, res, next) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).send('Email is required');
    }
    next();
};

const Registration = (req, res) => {
    res.status(201).send('User registered successfully');
};

app.post('/register',UserInput, Registration);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
