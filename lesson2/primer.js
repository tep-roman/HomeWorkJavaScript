'use strict';

/*
2. Чему будут равны переменные x и a в примере ниже? Написать почему так произошло
(описать последовательность действий).
 */

let a = 2;
let x = 1 + (a *= 2);
alert(x); // x = 5, т.к. выражение a *= 2 тоже что и a = a * 2, в итоге x = 1 + 4.