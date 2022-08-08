"use strict";
//  const archor = document.querySelector('a')!;
//  if(archor){
//     console.log(archor.href)
//  }
// console.log(archor.href)
const form = document.querySelector('.new-item-form');
// console.log(form.children)
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}
let invOne = new Invoice("Besong", "research on market", 200);
let invTwo = new Invoice("Shane", "research on market", 500);
console.log(invOne.format());
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invOne.client = "Alamine";
invTwo.amount = 400;
console.log(invOne, invTwo);
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
