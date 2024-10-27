const fibonacci = function(countArg) {
    let count;
    if (typeof countArg !== 'number') {
        count = parseInt(countArg);
    } else {
        count = countArg;
    }

    if(count < 0) return 'OOPS';
    if(count == 0) return 0;

    let firstNumber = 1;
    let secondNumber = 0;

    for(let i = 1; i <= count; i++){
        let current = firstNumber + secondNumber;
        secondNumber = firstNumber;
        firstNumber = current;
    }

    return secondNumber;


};

// Do not edit below this line
module.exports = fibonacci;
