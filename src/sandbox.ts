let greet: Function;

greet=()=>{
    console.log("sup homie!");
}

const add =(a: number, b: number, c:number | string = 10)=>{
    console.log(c)
    return a + b;
   
}

console.log(add(4,10))

const subtract = (y: number, x: number): number=> {
    return y - x
}

let answer = subtract(10, 4).toString()


console.log( answer)