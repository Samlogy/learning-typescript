import { CEO } from "./modules/module.js"

const p1 = new CEO('Sam', 25, 'sam@gmail.com', 50000)
const p2 = new CEO('admin', 25, 'admin@gmail.com', 150000)
console.log(p1.greeting())

let persons: CEO[] = [];

persons.push(p1)
persons.push(p2)

console.log("persons: ", persons)
for (let person of persons) {
    console.log(person.greeting())
}
// interfaces can be used on obj, classes, 

console.log(p2.increaseSalary())