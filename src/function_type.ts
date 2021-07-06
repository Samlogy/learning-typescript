// functions
function calcSum (a: number, b: number) {
    return a + b;
}
console.log(calcSum(10, 12))

// function signature (define params, types, & return type)
let calcSum2: (a: number, b:number) => number;
let calcSum3: (a: number, b:number, c?:number) => number;
// C: parameter is optional

let greet: Function;
greet = (c?:string) => {
    console.log(`Hello guys i'm a greet function ! --> ${c}`)
}
greet("Sam ")