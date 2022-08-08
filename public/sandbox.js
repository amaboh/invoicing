"use strict";
let greet;
greet = () => {
    console.log("sup homie!");
};
const add = (a, b, c = 10) => {
    console.log(c);
    return a + b;
};
console.log(add(4, 10));
const subtract = (y, x) => {
    return y - x;
};
let answer = subtract(10, 4).toString();
console.log(answer);
