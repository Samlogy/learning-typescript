interface IPerson {
    name: string;
    age: number;
    email: string;
    salary: number;
}

class Person implements IPerson {
    readonly name: string;
    public age: number;
    public email: string;
    public salary: number;

    // public: accessible anywhere else, 
    // private: inside class only, 
    // readonly: anywhere else but can't be changed

    constructor(n: string, a:number, e: string, z: number) {
        this.name = n;
        this.age = a;
        this.email = e;
        this.salary = z;
    }

    greeting() {
        return `Hello my name is ${this.name} and i'm ${this.age} years old, my email address: ${this.email}, my current salary is: ${this.salary}`
    }
}
const p1 = new Person('Sam', 25, 'sam@gmail.com', 50000)
const p2 = new Person('admin', 25, 'admin@gmail.com', 150000)
console.log(p1.greeting())

let persons: Person[] = [];
persons.push(p1)
persons.push(p2)
console.log("persons: ", persons)
for (let person of persons) {
    console.log(person.greeting())
}
// interfaces can be used on obj, classes, 