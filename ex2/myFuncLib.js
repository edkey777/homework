const fs = require('fs');

const numbers = fs.readFileSync(__dirname + '/numbers.txt', 'utf8')
    .trim()
    .split('\n')
    .map(Number);

let sum0 = 0;
for (let i = 0; i < numbers.length; i++) {
    sum0 += numbers[i];
}

const evenNumbers = numbers.filter(n => n % 2 === 0);
let sum = 0;
for (let i = 0; i < evenNumbers.length; i++) {
    sum += evenNumbers[i];
}

module.exports = {
    numbers: numbers,
    sum0: sum0,
    sum: sum
};