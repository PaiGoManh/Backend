const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

const certificates = [];

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.get('/issuecert', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'issuecert.html'));
});

app.get('/certificate/:id', (req, res) => {
    const id = req.params.id;
    const certificate = certificates.find(cert => cert.certificateId === id);
    if (!certificate) {
        return res.status(404).send('Certificate not found');
    }
    res.sendFile(path.join(__dirname, 'public', 'certificatepage.html'));
});

app.get('/api/certificate/:id', (req, res) => {
    const id = req.params.id;
    const certificate = certificates.find(cert => cert.certificateId === id);
    if (!certificate) {
        return res.status(404).json({ error: 'Certificate not found' });
    }
    res.json(certificate);
});

app.post('/issuecert', (req, res) => {
    const { course, certificateId, candidateName, grade, issueDate } = req.body;
    const newCertificate = { course, certificateId, candidateName, grade, issueDate };
    certificates.push(newCertificate);
    res.redirect(`/certificate/${certificateId}`);
});

app.use((req, res) => {
    res.status(404).send('Page not found');
});

app.listen(3002, () => {
    console.log("Server is running");
});
