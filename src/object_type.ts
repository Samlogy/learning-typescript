// objects
interface IPerson2 {
    name: string;
    age: number;
    skills: string[];
}

let kim: IPerson2 = {
    name: "sam",
    age: 25,
    skills: ["dev", "opthimistic", "trustfull", "handsome", "intelligent", "and much more..."]
}

// NB: person obj must always have name & age of the same type, can not add new attribute to person (immutable)

console.log("person: ", kim)

