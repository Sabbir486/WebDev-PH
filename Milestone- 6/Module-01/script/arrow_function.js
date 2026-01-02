// Normal Function

function s(n1, n2){
    return n1 + n2;
}

const result = s(100, 200);
console.log(result);


// Arrow Function (Multiple Parameter)

const sum2 = (v1, v2) => {
    return v1 + v2;
}

console.log(sum2(15,25));


// Without Parameter

const test = () => console.log("Hello Empty");
test();

// With One Parameter

const test2 = a => a*a;
console.log(test2(10));




