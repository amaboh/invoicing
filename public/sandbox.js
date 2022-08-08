"use strict";
const item = {
    name: "tomate",
    uid: 233998
};
const logDetails = (uid = '765') => {
    console.log(`${item.name} has uid of ${uid}`);
};
logDetails();
const greet = (user) => {
    console.log(`${user.name} says hello`);
};
let calc;
calc = (pOne, pTwo, result = "minus") => {
    if (result === "minus") {
        return pOne - pTwo;
    }
    else {
        return pOne + pTwo;
    }
};
let output = calc(3, 6, "minus");
console.log(output);
// 2nc case
let logOutput;
let ninja = {
    name: "amaboh",
    age: 30
};
const engineer = ninja;
logOutput = (ninja) => {
    console.log(`${ninja.name} ${ninja.age} years old`);
};
logOutput(engineer);
