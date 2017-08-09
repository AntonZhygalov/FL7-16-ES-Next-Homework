function *factorial(n) {
    var factor = 1;
    for (var i = 1; i <= n; i++) {
        factor *= i;
        yield factor;
    }
}

for (var n of factorial(5)) {
    console.log(n)
}