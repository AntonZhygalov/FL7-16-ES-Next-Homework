const max = process.argv[2];
let FizzBuzz = function*() {
    let start = 1;
    while (start <= max) {
        if (start % 3 === 0 && start % 5 === 0) {
            yield 'FizzBuzz';
        } else if (start % 3 === 0) {
            yield 'Fizz';
        } else if (start % 5 === 0) {
            yield 'Buzz';
        } else {
            yield start;
        }
        start++;
    }
}();

for (var n of FizzBuzz) {
    console.log(n);
}