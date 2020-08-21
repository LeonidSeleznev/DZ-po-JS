'use strict';

function NumberComposition(number) {
    if (number < 0 || number > 999 || !Number.isInteger(number)) {
        console.log('Введенное число должно быть в диапазона [0...999]');
        return {};
    }

    return  {
        units: number % 10,
        tens: Math.floor(number / 10) % 10,
        hundreds: Math.floor(number / 100)
    }
}

console.log(NumberComposition(657));