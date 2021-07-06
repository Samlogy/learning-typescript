// generics with specified type
const lastItem = (arr: Array<number>) => {
    return arr[arr.length - 1];
};

console.log(lastItem([1,2,3]))

// generics with dynamic type 
const lastItemNum = <T>(arr: T[]) => {
    return arr[arr.length - 1]
};
const lastItemString = <T>(arr: T[]) => {
    return arr[arr.length - 1]
};

console.log(lastItemNum([1, 2, 3])) // arr(numbers) -> number
console.log(lastItemString(['1', '2', '3'])) // arr(strings) -> string


// generic dynamic type (tuple) create a tuple
const makeTuple = <X, Y>(x: X, y: Y): [X, Y] => {
    return [x, y]
};
console.log(makeTuple(5, 6))
console.log(makeTuple('5', 6))

const newVal = makeTuple<string | null, number>("a", 5);
console.log(newVal)
