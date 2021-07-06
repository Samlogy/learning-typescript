"use strict";
// void
const functionVoidType = (a, b, c) => {
    console.log(`My name is: ${b} and my age is ${a} and this is an optional parameter ${c ? c : ""} !`);
};
functionVoidType(25, 'Samy', 'another value');
let voidType = () => {
    console.log('hello !\nclassique void type function !');
};
voidType();
// this function returns nothing it's a void type funciton
