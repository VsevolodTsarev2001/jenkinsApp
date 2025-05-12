const express = require('express');
const app = express();

const PORT = 3000;

// Home endpoint
app.get('/', (req, res) => {
    res.send('My favorite dessert is Tiramisu!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
