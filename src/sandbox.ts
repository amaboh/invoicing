type itemType = {
    name: string;
    uid: number;
}


const item:itemType = {
    name: "tomate",
    uid: 233998
}


const logDetails = (uid : string = '765') =>{
    console.log(`${item.name} has uid of ${uid}`)
}

logDetails()

type StringOrNum = string | number;

type UserDetails = {name: string,  uid: StringOrNum}

const greet =(user:{name: string, uid: string | number}) =>{
    console.log(`${user.name} says hello`)
}

let calc: (a: number, b: number, y: string) => number 

calc = (pOne: number, pTwo: number, result: string = "minus") =>{
    if(result === "minus"){
    return pOne - pTwo} else{
        return pOne +pTwo
    }
}

let output = calc(3, 6,"minus")

console.log(output)

// 2nc case

let logOutput: (obj: { name: string; age: number})=> void;

type Person = {name: string, age: number};

let ninja = {
    name: "amaboh",
    age: 30
}

const engineer = ninja

logOutput = (ninja: Person)=>{
    console.log(`${ninja.name} ${ninja.age} years old`)
}


logOutput(engineer)