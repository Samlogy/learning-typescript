"use strict";
// generics with specified type
const lastItem = (arr) => {
    return arr[arr.length - 1];
};
console.log(lastItem([1, 2, 3]));
// generics with dynamic type 
const lastItemNum = (arr) => {
    return arr[arr.length - 1];
};
const lastItemString = (arr) => {
    return arr[arr.length - 1];
};
console.log(lastItemNum([1, 2, 3])); // arr(numbers) -> number
console.log(lastItemString(['1', '2', '3'])); // arr(strings) -> string
// generic dynamic type (tuple) create a tuple
const makeTuple = (x, y) => {
    return [x, y];
};
console.log(makeTuple(5, 6));
console.log(makeTuple('5', 6));
const newVal = makeTuple("a", 5);
console.log(newVal);
