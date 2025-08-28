// Template String for Dynamic Work

const lName = 'Gias';
const fName = 'Udidin';

console.log(`I am MD ${lName} ${fName}`);
console.log();



// In Arrow function Value Return in Array using Rest function-->

const sum = (...rest) => {
    console.log(rest);
    
};

sum(1,2,3,4,5);
console.log();


// (...) --> These three dots are called spread Operator

const number = [1,2,3,4,5,6];

const newNumber = [...number, 9,10,11];

console.log(newNumber);
