'use strict';

/*
5. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических
операций
(использовать функции из задания 4) и вернуть полученное значение.
 */

let a = +prompt("Введите любое целое число: ");
let b = +prompt("Введите любое целое число: ");
let c = prompt("Введите название арифметической операции, которую вы хотите выполнить (сложение, вычитание, деление" +
    " или умножение): ");

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

function mathOperation(arg1, arg2, operation){
    switch(operation){
        case "сложение":
            return sum(arg1, arg2);
        case "вычитание":
            return minus(arg1, arg2);
        case "деление":
            return division(arg1, arg2);
        case "умножение":
            return composition(arg1, arg2);
    }
}
result = mathOperation(a, b, c);
alert(result);