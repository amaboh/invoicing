//  const archor = document.querySelector('a')!;

//  if(archor){
//     console.log(archor.href)
//  }
// console.log(archor.href)
 

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children)

class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor(c: string, d: string, a: number){
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format(){
        return `${this.client} owes ${this.amount} for ${this.details}`
    }
}


let invOne = new Invoice("Besong", "research on market", 200)
let invTwo = new Invoice("Shane", "research on market", 500)

console.log(invOne.format())

let invoices : Invoice[] = [];

invoices.push(invOne);
invoices.push(invTwo);

invOne.client = "Alamine"
invTwo.amount = 400

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
  
