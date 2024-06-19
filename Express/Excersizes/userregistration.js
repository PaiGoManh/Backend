const express = require('express');
const app = express();
app.use(express.json());

const login = (req, res, next) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).send('Email is required');
    }
    next();
};

const registration = (req, res) => {
    res.status(201).send('User registered successfully');
};

app.post('/register',login, registration);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
