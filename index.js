const express = require('express')

const app = express();

app.get('/', (req, res) => {
    res.send("Hello Express!");
});

app.get('/api/drugs', (req, res) => {
    res.send(JSON.stringify([1, 2, 3, 4, 5,6]));
})


app.listen(8000, ()=> { console.log('Server is listeing on port 8000')});