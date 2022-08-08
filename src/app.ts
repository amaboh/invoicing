import {Invoice} from './classes/Invoice.js'

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


const type = document.querySelector("#type") as HTMLInputElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event)=>{
    e.preventDefault();

    console.log(type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber)
})
  
