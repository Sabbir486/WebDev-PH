const person = {
    name: 'sa',
    age: 25,
    friends: ['rony', 'fahim'],
    status: true
}

// json

//All are converted into String
// Number and boolean value not converted into string

const newPerson = JSON.stringify(person);

console.log(newPerson);
console.log(typeof newPerson); //Object converted into String

