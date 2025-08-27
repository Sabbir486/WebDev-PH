// Validation Check

function multiply(num1, num2){

    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return "Provide a valid Number";
    }
    const mul = num1 * num2;
    return mul;
}

const result = multiply('ab', 10);
console.log(result);
console.log('------------------');


// From Object


function getObj(product){

    if(typeof product !== 'object'){
        return 'Please provide an Object';
    }
    const price = product.price;
    return price;
}

const price = getObj({name: "sa", price: 300, color: 'blue'});
console.log(price);


