
let character: string;
let age: number;

let isLoggedIn: boolean;

// arrays
let ninjas: string[] = [];

// union types
let mixed : (string | number| boolean) [] = [];
mixed.push('hello');
mixed.push(20);
mixed.push(false)


let uid: string| number;
uid= '123';
uid= 123;
console.log(mixed)

// objects
let ninjaOne: object;
ninjaOne = {name: 'mario', age: 30} 

let ninjaTwo:{
    name: string,
    age: number,
    profession: any,
}

ninjaTwo = {name: 'ama', age: 30, profession: "Software engineer"}
console.log(ninjaTwo)

ninjas.push('Amaboh')