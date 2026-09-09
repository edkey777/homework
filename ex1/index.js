const mylib = require("./myLib");
const http = require('http');

const server = http.createServer((req, res) => {
    console.log("URL: ", req.url);



    mylib.cB(__dirname + '/body.html', res);
});

server.listen(3212, '127.0.0.1', () => {
    console.log('Server running on port 3212');
});