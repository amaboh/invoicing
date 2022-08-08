//  const archor = document.querySelector('a')!;

//  if(archor){
//     console.log(archor.href)
//  }
// console.log(archor.href)
 

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children)

class Invoice {
   

    constructor( readonly client: string,
        private details: string,
        public amount: number){
   
    }

    format(){
        return `${this.client} owes ${this.amount} for ${this.details}`
    }
}


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
  
