/**
 * Created by Phil on 10/03/16.
 */
for (var i = 1; i <= 100; i++){
    var isDividibleByThree = i % 3 === 0;
    var isDivisibleByFive = i % 5 === 0;
    if (isDividibleByThree && isDivisibleByFive) {
    console.log('FizzBuzz');
    }
    else if (isDividibleByThree) {
        console.log('Fizz');
    }
    else if (isDivisibleByFive) {
        console.log('Buzz');
    }
    else {
        console.log(i);
    }
}

