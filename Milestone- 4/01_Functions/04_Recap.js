function add(val1, val2){
    const total = val1 + val2;
    return total
}

const bill = add(5, 50);
console.log(bill);
console.log();

function doMath(num1 , num2){
    const sum = num1+num2;
    const diff = num1-num2;
    const mul = num1*sum;
    const result = mul/2;
    return result;
}

const result = doMath(15, 10);
console.log(result);
console.log("----------------");


function isEven(num){
    if(num%2 === 0){
        return "even";
    }

    else{
        return "odd";
    }
}

const res1 = isEven(10);
const res2 = isEven(15);

console.log(res1);
console.log(res2);



