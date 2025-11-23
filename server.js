const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse form data (application/x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }));

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle form submission
app.post('/register', (req, res) => {
  const { name, email } = req.body;
  console.log(`Received Registration - Name: ${name}, Email: ${email}`);
  res.send(`<h2>Thank you for registering, ${name}!</h2><p>Your email: ${email}</p>`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
