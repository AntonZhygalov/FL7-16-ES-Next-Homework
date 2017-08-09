const max = process.argv[2];
let FizzBuzz = {
 [Symbol.iterator]() {
     let start = 1;
     return {
         next() {
             if (start > max) {
                 return {
                     done: true
                 }
             }
             let iter = start;
            if (start % 3 === 0 && start % 5 === 0) {
                 iter = 'FizzBuzz';
             } else if (start % 3 === 0) {
                 iter = 'Fizz';
             } else if (start % 5 === 0) {
                 iter = 'Buzz';
             }
             start++;
             return {
                 done: false,
                 value: iter
             }
         }
     }
 }
}



for (var n of FizzBuzz) {
 console.log(n);
}