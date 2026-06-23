const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to your first Node.js & Express Server!');
});

app.get('/api/user', (req, res) => {
  res.json({
    id: 101,
    name: "Lahari",
    role: "MERN Stack Intern",
    status: "Active"
  });
});
app.get('/about', (req, res) => {
  res.send('I am Lahari Nodagala, MERN Stack Intern at Adhoc Networks Tech!');
});

app.get('/api/courses', (req, res) => {
  res.json([
    { id: 1, courseName: "HTML" },
    { id: 2, courseName: "CSS" },
    { id: 3, courseName: "JavaScript" },
    { id: 4, courseName: "React" },
    { id: 5, courseName: "Node.js" }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server is running successfully on http://localhost:${PORT}`);
});