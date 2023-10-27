const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello Meher you are in right person in the right time with right motivation , you will make it !'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
