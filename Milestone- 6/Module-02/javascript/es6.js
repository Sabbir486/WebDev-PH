// alert();

// Nested Object
const person = {
    name: "hena",
    1: '100',
    $abc: 'sabbir',
    age2: 30,
    friends: ['ra', 'ka', 'ta'],

    details: {
        job: 'yes',
        isMarried: true,
        status: 'not found',

        father: {
            name: 'pa',
            age3: 65,
        }
    }
}

console.log(person.details.father.age3);

// Optional Chaining (For Unusual Cases or Objects)

console.log(person.details?.mother?.age3); //It wil give Undefined otherwise it will give an error


// Dot Notation & Bracket Notation (More Powerful)

console.log(person.name);
console.log(person['name']);

console.log(person['details']['job']);

// console.log(person.1); -->Not work in Dot Notation
console.log(person.$abc);


console.log(person[1]);
console.log(person['$abc']);








