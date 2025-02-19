// server.js

const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files

// Database connection
const db = new sqlite3.Database('./database.db', (err) => {
  if (err) {
    console.log("herer1");
    console.error(err.message);
  }
  console.log('Connected to the SQLite database.');
});

// POST route to handle form submissions
app.post('/submit', (req, res) => {
  const { question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, question11, question12, question13, question14, question15 } = req.body;

  // Insert data into the answers table
  let sql = 'INSERT INTO answers (question1, question2, question3, question4, question5, question6,question7, question8, question9, question10,question11, question12, question13, question14,question15, question16, question17, question18,question19, question20) VALUES (?, ?, ?, ?, ?,?, ?, ?, ?, ?,?, ?, ?, ?, ?,?, ?, ?, ?, ?)';

   
  db.run(sql, [question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, question11, question12, question13, question14, question15], function(err) {
    if (err) {
      console.error(err.message);
      return res.status(500).send('Error inserting data.');
    }
    
    console.log(`A row has been inserted with rowid ${this.lastID}`);
    res.send('Answers submitted successfully!');
  });

   
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
