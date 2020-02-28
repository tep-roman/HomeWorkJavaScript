'use strict';
/*
1. Написать функцию, преобразующую число в объект. Передавая на вход число в диапазоне [0, 999],
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
- единицы (в свойстве units)
- десятки (в свойстве tens)
- сотни (в свойстве hundereds)
Например, для числа 45 мы должны получить следующий объект:
{
units: 5, //это единицы
tens: 4, //это десятки
hundreds: 0, //это сотни
}
Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
 */

let inputNumber = +prompt("Введите число от 0 до 999");

function numToObj(number) {
    let newNumber = {
        units: number % 10,
        tens: Math.floor(number / 10) % 10,
        hundereds: Math.floor(number / 100)
    };
    return newNumber;
}

while (Number.isInteger(inputNumber) === false || inputNumber < 0 || inputNumber > 999) {
    if (Number.isInteger(inputNumber) === false){
        console.log("Введено нецелое число, попробуйте еще раз:");
        inputNumber = +prompt("Введите целое число от 0 до 999");
    } else if (inputNumber > 999){
        console.log("Введено число больше 999, попробуйте еще раз:");
        inputNumber = +prompt("Введите целое число от 0 до 999");
    } else {
        console.log("Введено число меньше 0, попробуйте еще раз:");
        inputNumber = +prompt("Введите целое число от 0 до 999");
    }
} console.log(numToObj(inputNumber));