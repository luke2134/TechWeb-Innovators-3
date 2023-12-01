const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Simulated database (replace this with a real database)
const users = [
    { username: 'user', password: 'password' }
];

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    // Check against the simulated database (replace this with your database logic)
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
