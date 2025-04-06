// Import the express package
const express = require('express');
const path = require('path');

// Create an instance of the express server
const app = express();


app.use(express.static(__dirname));


app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'GradesFeedback.html')); 
});
    
// Set up the server to listen on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
