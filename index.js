const express = require('express');
const app = express();
const port = 80;
app.get('/', (req, res) => {
    res.send('<h1>Hello World from Docker and Node.js and Azure!</h1>');
});
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
