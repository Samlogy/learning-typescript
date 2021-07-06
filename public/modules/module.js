export class CEO {
    // public: accessible anywhere else, 
    // private: inside class only, 
    // readonly: anywhere else but can't be changed
    constructor(n, a, e, z) {
        this.name = n;
        this.age = a;
        this.email = e;
        this.salary = z;
    }
    increaseSalary() {
        const salary = this.salary * .2 + this.salary;
        return salary;
    }
    greeting() {
        return `Hello my name is ${this.name} and i'm ${this.age} years old, my email address: ${this.email}, my current salary is: ${this.salary}`;
    }
}
