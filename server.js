const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse form data (application/x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }));

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle registration form submission
app.post('/register', (req, res) => {
  const { name, email } = req.body;
  console.log(`Received Registration - Name: ${name}, Email: ${email}`);

  // Redirect to dashboard with query params
  res.redirect(`/dashboard.html?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`);
});

// Handle login form submission
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  console.log(`Login attempt - Email: ${email}, Password: ${password}`);

  // For now, we just simulate a logged-in user
  const user = { name: "Demo User", email: email };

  // Redirect to dashboard with query params
  res.redirect(`/dashboard.html?name=${encodeURIComponent(user.name)}&email=${encodeURIComponent(user.email)}`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
