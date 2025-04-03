const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json()); // Middleware to parse JSON data

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname)));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'module.html')); 
});

// Endpoint to fetch all modules
app.get('/modules', (req, res) => {
  const filePath = path.join(__dirname, 'modules.json');

  // Check if the file exists, if not create an empty array
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([]));
  }

  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading data');
    }
    res.json(JSON.parse(data)); // Send modules data
  });
});

// Endpoint to create a new module
app.post('/createModule', (req, res) => {
  const newModule = req.body;

  // Validate the incoming module data
  if (!newModule.title || !newModule.content) {
    return res.status(400).send('Module title and content are required');
  }

  const filePath = path.join(__dirname, 'modules.json');

  // Check if the file exists, if not create an empty array
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([]));
  }

  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading data');
    }

    const modules = JSON.parse(data);
    modules.push(newModule); // Add the new module to the existing modules array

    fs.writeFile(filePath, JSON.stringify(modules, null, 2), (err) => {
      if (err) {
        return res.status(500).send('Error saving data');
      }
      res.status(201).send('Module created successfully');
    });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
