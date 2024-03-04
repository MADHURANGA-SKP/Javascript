let data= [];
total=0;

function addNumbers(numbers){
    data.push(numbers);
    console.log('added number: ', numbers);
}

function additionNumbers(){
    for (let i = 0; i < data.length; i++ ) {
        total += data[i];
    }
    console.log('addition of numbers: ',total);
}

function subtractionNumbers(){
    var value = data[0] - data[1];
    console.log('subtraction of numbers: ', value);
}

function multiplicationNumbers(numbers){
    var value = data[0] * data[1];
    console.log('multiplication of numbers: ', value);
}

function divisionNumbers(numbers){
    var value = data[0] / data[1];
    console.log('division of numbers: ', value);
}



addNumbers(1);
addNumbers(2);

additionNumbers()
subtractionNumbers()
multiplicationNumbers()
divisionNumbers()

