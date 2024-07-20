const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(bodyParser.urlencoded({ extended: true }));

// Parse JSON bodies (as sent by API clients)
app.use(bodyParser.json());

// Handle form submission
app.post('/submit', (req, res) => {
    const gender = req.body.gender;
    if (gender === 'male') {
        res.redirect('/option_male.html');
    } else if (gender === 'female') {
        res.redirect('/option_female.html');
    } else {
        res.send('Invalid gender selection');
    }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
