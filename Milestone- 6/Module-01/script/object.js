// Object

const person1 = {
    name: 'hena',
    age: 10,
    country: "bd"
}

console.log(Object.keys(person1));
console.log(Object.values(person1));
console.log(Object.entries(person1));

Object.freeze(person1); //This object will not change anymore


