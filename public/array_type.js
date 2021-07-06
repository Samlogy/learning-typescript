"use strict";
// arrays (string, boolean, interger, ...)
let arrStr = ['a', 'b', 'c', 'd'];
arrStr.push('e');
arrStr = [...arrStr, 'f'];
arrStr[arrStr.length] = 'g';
console.log(arrStr);
// array union
let arrMix = ["a", 0, true];
console.log(arrMix);
// NB: any type of previous ones can be pushed inside the array
