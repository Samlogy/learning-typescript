interface IPerson {
    name: string;
    age: number;
    email: string;
    salary: number;
    increaseSalary(): number
}

export class CEO implements IPerson {
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

    increaseSalary() {
        const salary = this.salary * .2 + this.salary
        return salary
    }

    greeting() {
        return `Hello my name is ${this.name} and i'm ${this.age} years old, my email address: ${this.email}, my current salary is: ${this.salary}`
    }
}
