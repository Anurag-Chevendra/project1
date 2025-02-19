// init_db.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database.db', (err) => {
  if (err) {
    console.log("here2");
    console.error(err.message);
  }
  console.log('Connected to the database.');
});

db.serialize(() => {
  console.log("herere");
  db.run(`CREATE TABLE IF NOT EXISTS answers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    question1 TEXT,
    question2 TEXT,
    question3 TEXT,
    question4 TEXT,
    question5 TEXT,
    question6 TEXT,
    question7 TEXT,
    question8 TEXT,
    question9 TEXT,
    question10 TEXT,
    question11 TEXT,
    question12 TEXT,
    question13 TEXT,
    question14 TEXT,
    question15 TEXT,
    question16 TEXT,
    question17 TEXT,
    question18 TEXT,
    question19 TEXT,
    question20 TEXT
    
  )`, (err) => {
    if (err) {
      console.log("herer5");
      console.error(err.message);
    } else {
      console.log('Created answers table.');
    }
  });
});

db.close((err) => {
  if (err) {
    console.log("this cant be it");
    console.error(err.message);
  }
  console.log('Closed the database connection.');
});
