// Import express
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Simple route
app.get('/', (req, res) => {
  res.send("Hello from Node.js Server 🚀 - visit my website - https://dev-anurag.vercel.app");
});

// Another example route
app.get('/about', (req, res) => {
  res.json({
    app: "My Node Server",
    version: "1.0.0"
  });
});

// Another example route
app.get('/contact', (req, res) => {
  res.json({
    app: "My Node Server",
    website: "https://dev-anurag.vercel.app/",
    version: "1.0.0"
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
