'use strict';
/*
4. Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя
параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их
и возвращать результат.
Обязательно использовать оператор return.
 */

a = 6;
b = 3;

function sum(x, y) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function division(a, b) {
    return a / b;
}

function composition(a, b) {
    return a * b;
}

let result = sum(a, b);
alert(result);

result = minus(a, b);
alert(result);

result = division(a, b);
alert(result);

result = composition(a, b);
alert(result);