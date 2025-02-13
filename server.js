const express = require('express');
const app = express();
const PORT = 3000;

// Serve static files from the 'public' folder
app.use(express.static('publicc'));

// Home Route
app.get('/', (req, res) => {
    res.sendFile(__dirname + 'publicc/html.html');
});

// Cart Route
app.get('/cart', (req, res) => {
    res.send('Your cart is empty.');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
