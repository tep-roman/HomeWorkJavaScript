'use strict';

/*
3. Объявить две переменные a и b и задать им целочисленные произвольные начальные
значения.
Затем написать скрипт, который работает по следующему принципу:
- если a и b положительные, вывести их разность (ноль можно считать положительным числом);
- если а и b отрицательные, вывести их произведение;
- * (этот пункт по сложнее, делайте по желанию) если а и b разных знаков, вывести их сумму;
Подсказка, чтобы сделать последний пункт можно также попробовать погуглить по запросу
«получить знак числа javascript»
 */

let a = +prompt("Введите любое целое число: ");
let b = +prompt("Введите любое целое число: ");
let x;
if (a >= 0 && b >= 0) {
    if (a >= b){
        alert(`Разница этих чисел = ${x = a - b}`);
    }
    else {
        alert(`Разница этих чисел = ${x = b - a}`);
    }
} else if (a < 0 && b < 0) {
    alert(`Произведение этих чисел = ${x = a * b}`);
} else {
    alert(`Сумма этих чисел = ${x = a + b}`);
}