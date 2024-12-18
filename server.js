const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

let profileData = {}; // Temporary in-memory data storage

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(__dirname)); // Serve static files (HTML)

// Route to get saved profile data
app.get('/getProfile', (req, res) => {
    res.json(profileData);
});

// Route to save profile data
app.post('/saveProfile', (req, res) => {
    const { firstName, lastName, email, dob, country } = req.body;

    // Save the data
    profileData = { firstName, lastName, email, dob, country };

    console.log('Saved Profile Data:', profileData);
    res.status(200).json({ message: 'Profile saved successfully!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
