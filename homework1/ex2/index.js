const myFuncLib = require("./myFuncLib");
const http = require('http');

const server = http.createServer((req, res) => {
    console.log("URL: ", req.url);


    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });

    const output =
        "Сумма всех чисел: " + myFuncLib.sum0 + "\n" +
        "Количество чисел: " + myFuncLib.numbers.length + "\n" +
        "Сумма четных чисел: " + myFuncLib.sum;
    res.end(output);

});

server.listen(3213, '127.0.0.1', () => {
    console.log('Server running on port 3213');
});


