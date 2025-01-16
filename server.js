const express = require('express');
const mysql = require('mysql');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'portfolio_messages'
});

// Connect to the database
db.connect((error) => {
    if (error) {
        console.log("Found a problem connecting to the database", error);
        return;
    }
    console.log("Connected to the database");
});

// Serve the HTML form
app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle form submission
app.post('/submit', (request, response) => {
    const { name, email, phone, message } = request.body;

    if (!name || !email || !phone || !message) {
        return response.status(400).send("All fields are required.");
    }

    const query = 'INSERT INTO messages(name, email, phone, message) VALUES (?, ?, ?, ?)';
    db.query(query, [name, email, phone, message], (error, result) => {
        if (error) {
            console.log("Error submitting data into database:", error);
            response.status(500).send("Error saving data.");
            return;
        }
        response.send("Data sent successfully.");
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
