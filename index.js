const app = require('./app')
const fs = require('fs')
const http = require('http')
const colors = require('colors')

fs.writeFileSync('Hello.txt', 'Hello World!')

const z = 20;
for (i = 0; i < 10; i++) {
    console.log(i);
}
console.log(app);
const arr = [1, 2, 3, 4, 5, 6, 7]
console.log(arr)
console.log("Hello".green)

http.createServer((req, res) => {
    res.write("<h1>Hello world!</h1>")
    res.end();
}).listen(4400);