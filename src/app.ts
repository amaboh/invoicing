import { model } from 'mongoose';
import {Invoice} from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import {Payments} from './classes/Payment.js';
import {HasFormatter} from './interfaces/HasFormatter.js';

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice("Shane", "web development", 500)
docTwo = new Payments("Amaboh", "ui research", 400)

let docs : HasFormatter[] =[]

docs.push(docOne, docTwo);

console.log(docs)



//  const archor = document.querySelector('a')!;

//  if(archor){
//     console.log(archor.href)
//  }
// console.log(archor.href)
 

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children)


// interfaces

interface isPerson{
    name: string;
    age: number;
    speak(language: string): void;
    spend(money: number): number;
}


const me: isPerson ={
    name: "John",
    age: 32,
    speak(text: string): void{
        console.log("I speak", text)
    },
    spend(amount: number): number{
        console.log('he spent', amount)
        return amount;
    }
};

const greetPerson = (person: isPerson)=>{
    console.log('ola', person.speak("fr"))
}

greetPerson(me)

let invOne = new Invoice("Besong", "research on market", 200)
let invTwo = new Invoice("Shane", "user reseach on ui & ux", 500)

console.log(invOne.format())

let invoices : Invoice[] = [];

invoices.push(invOne);
invoices.push(invTwo);

// invOne.client = "Alamine"
invTwo.amount = 400

invoices.forEach(inv =>{
    console.log(inv.client, inv.amount, inv.format())
})

console.log(invOne, invTwo)


const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const bill = document.querySelector("#amount") as HTMLInputElement;

// list template instance 
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);


let docuInv: HasFormatter;
form.addEventListener("submit", (e: Event)=>{
    e.preventDefault();

    let value: [string, string, number]
    value = [tofrom.value, details.value, bill.valueAsNumber]

    if(type.value === "invoice"){
        docuInv = new Invoice(...value)
    }else{
        docuInv = new Payments(...value)
    }

    list.render(docuInv, type.value, 'end')

    form.reset( )
})
  

const addUID = <T extends object> (obj: T)=>{
    let UID = Math.floor(Math.random() * 100)
    return {...obj, UID}
}

const docBlu = addUID({name: "amaboh", age: 30});
const docRed = addUID({})
console.log(docBlu)

interface modelCard <T>{
    name: string;
    year: number;
    model: T;
}

const vehicle: modelCard<object> = {
    name: "Tesla",
    year: 2005,
    model: {suv:"Y", sedan: "X"}

}

const planet: modelCard<string[]> = {
    name: "Benx",
    year: 1896,
    model: ["G wagon", "S class"]
}