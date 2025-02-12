const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public')); // Serve static files from the 'public' directory

app.get('/cart', (req, res) => {
    res.send('This is your cart page.');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});