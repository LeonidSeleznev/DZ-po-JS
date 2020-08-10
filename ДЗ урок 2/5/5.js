'use strict';

function plus(a , b){
    return(a + b)
}

function minus(a , b){
    return(a - b)
}

function multiply(a , b){
    return(a * b)
}

function divide(a , b){
    return(a / b)
}

function mathOperation(arg1 , arg2 , operation){
    switch (operation) {
        case '+': 
        return(plus(arg1, arg2));
        case '-':
        return(minus(arg1, arg2));
        case '*':
        return(multiply(arg1, arg2));
        case '/':
        return(divide(arg1, arg2));
    }
}

console.log(mathOperation(2 , 4 , '+'));
console.log(mathOperation(2 , 4 , '-'));
console.log(mathOperation(2 , 4 , '*'));
console.log(mathOperation(2 , 4 , '/'));

