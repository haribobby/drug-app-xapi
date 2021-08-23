
//Core nodejs server 
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url ==="/") {
        res.write("Hello Node.js");
        res.end();
    }

    if (req.url === "/api/drugs") {
        res.write(JSON.stringify([1, 2, 3, 4, 5]));
        res.end();
    }
});

server.listen(8000);
