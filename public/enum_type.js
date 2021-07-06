"use strict";
// ENUMS
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
console.log('enum Display !');
for (let i in Direction) {
    console.log(i);
}
