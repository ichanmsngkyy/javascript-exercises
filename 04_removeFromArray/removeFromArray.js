const removeFromArray = function(array, ...remove) {

    let newArray = [];

    for(let i = 0; i < array.length; i++){

        if(remove.includes(array[i])){
            continue;
        }

        newArray.push(array[i]);
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
