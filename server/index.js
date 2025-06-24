const express = require('express');

const app = express();
const port = 3000;
const path = require('path');

const serverName = process.env.SERVER_NAME || 'Unnamed Server';


app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.send(`Hello from ${serverName}`);
});
app.get('/api/data', (req, res) => {
    res.json({ message: 'This is a sample API response' });
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
// This is a simple Express server that serves static files from the 'public' directory
// and provides a sample API endpoint at '/api/data'.
// You can test the server by running 'node index.js' and visiting 'http://localhost:3000' in your browser.