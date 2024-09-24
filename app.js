const express = require('express');
const path = require('path');
const app = express();
const port = 5000;

// Set the view engine to render HTML files
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.json());
// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Serve static files (like stylesheets or images) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to render the HTML page
// Start the server
app.get('/', (req, res) => {
    res.render('login'); // Renders 'views/login.html'
});
app.get('/reg', (req, res) => {
    res.render('register'); // Renders 'views/login.html'
});
app.get('/core', (req, res) => {
    res.render('index'); // Renders 'views/index.html'
});
app.get('/budget', (req, res) => {
    res.render('budgetmanagement'); // Renders 'views/index.html'
});
app.post('/sample', (req, res) => {
  const body=req.body;
  console.log(body);
    res.render('samp'); // Renders 'views/index.html'
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
