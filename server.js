const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 4000;

// Middleware to parse JSON in the request body
app.use(bodyParser.json());

// In-memory user data (replace this with a database in a real application)
const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
];

// Serve static files (like your HTML file) from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint for handling login requests
// Catch-all route to serve the HTML file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});
app.route('/*').get(function(req, res) { 
  return res.sendFile(path.join(__dirname, 'public/login.html')); 
});
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if the provided credentials match any user
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
