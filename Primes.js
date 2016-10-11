function isPrime(value) {
    for(var i = 2; i < (value/2 + 1); i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}

var count = 1;
var numberOfPrimes = 0;
while (numberOfPrimes < 10001) {
    count++;
    if(isPrime(count)){
      numberOfPrimes++;
    }

    console.log(count, isPrime(count), numberOfPrimes);
}
