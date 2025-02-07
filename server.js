const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors()); // Enable CORS for browser fetch
app.use(express.json()); // Allow JSON parsing

// Route to serve match history
app.get('/matchHistory', (req, res) => {
    fs.readFile('matchHistory.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ error: "Failed to read match history." });
        } else {
            res.json(JSON.parse(data));
        }
    });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));