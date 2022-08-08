import { Invoice } from './classes/Invoice.js';
import { Payments } from './classes/Payment.js';
let docOne;
let docTwo;
docOne = new Invoice("Shane", "web development", 500);
docTwo = new Payments("Amaboh", "ui research", 400);
let docs = [];
docs.push(docOne, docTwo);
console.log(docs);
//  const archor = document.querySelector('a')!;
//  if(archor){
//     console.log(archor.href)
//  }
// console.log(archor.href)
const form = document.querySelector('.new-item-form');
const me = {
    name: "John",
    age: 32,
    speak(text) {
        console.log("I speak", text);
    },
    spend(amount) {
        console.log('he spent', amount);
        return amount;
    }
};
const greetPerson = (person) => {
    console.log('ola', person.speak("fr"));
};
greetPerson(me);
let invOne = new Invoice("Besong", "research on market", 200);
let invTwo = new Invoice("Shane", "user reseach on ui & ux", 500);
console.log(invOne.format());
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
// invOne.client = "Alamine"
invTwo.amount = 400;
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
console.log(invOne, invTwo);
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const bill = document.querySelector("#amount");
let docuInv;
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (type.value === "invoice") {
        docuInv = new Invoice(tofrom.value, details.value, bill.valueAsNumber);
    }
    else {
        docuInv = new Payments(tofrom.value, details.value, bill.valueAsNumber);
    }
    console.log(docuInv);
});
