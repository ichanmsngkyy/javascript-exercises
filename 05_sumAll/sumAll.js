const sumAll = function(firstNumber, secondNumber) {

    if(firstNumber < 0 || secondNumber < 0){
        return 'ERROR';
    }
    
    if(!Number.isInteger(firstNumber) || !Number.isInteger(secondNumber)){
        return 'ERROR';
    }

    let sum = 0;
    if(firstNumber > secondNumber){
        [firstNumber, secondNumber] = [secondNumber, firstNumber];
    }

    for(let i = firstNumber; i <= secondNumber; i++){
        
        sum += i;

    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
