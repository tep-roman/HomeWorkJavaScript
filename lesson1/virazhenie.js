'use strict';
/*3. Вывести в консоль значения выражений и объяснить почему получились такие значения
используя комментарии к каждому выражению:*/

    console.log(10 + 10 + "10");
/*
ответ будет "2010", сначала будет выполнено сложение 10 + 10, т.к. - это числа, а затем склеивание, т.к. "10" - это
 строка
 */

    console.log(10 + "10" + 10);
/*
ответ будет "101010", т.к. "10" находится между числами.
 */

console.log(10 + 10 + +"10");

/*
ответ будет 30, т.к. +"10" создаст из строки число.
 */
console.log(10 / -"");

/*
ответ будет -Infinity, т.к. пустая строка - 0, а при делении на -0 будет -Infinity.
 */

console.log(10 / +"2,5");

/*
ответ будет NaN, т.к. данное выражение +"2,5" будет NaN.
 */
