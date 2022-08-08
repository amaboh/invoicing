import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
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
// list template instance 
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
let docuInv;
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let value;
    value = [tofrom.value, details.value, bill.valueAsNumber];
    if (type.value === "invoice") {
        docuInv = new Invoice(...value);
    }
    else {
        docuInv = new Payments(...value);
    }
    list.render(docuInv, type.value, 'end');
    form.reset();
});
const addUID = (obj) => {
    let UID = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { UID });
};
const docBlu = addUID({ name: "amaboh", age: 30 });
const docRed = addUID({});
console.log(docBlu);
const vehicle = {
    name: "Tesla",
    year: 2005,
    model: { suv: "Y", sedan: "X" }
};
const planet = {
    name: "Benx",
    year: 1896,
    model: ["G wagon", "S class"]
};
