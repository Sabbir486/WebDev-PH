function sumArr(vals){

    let res = 0;
    for(const val of vals ){

        res = res + val;        
    }
    return res;

}

const sum = sumArr([1,3,5,7,8,3,9]);
console.log("Sum: ", sum);
console.log("-----------------");



function arrEven(arr) {

    const even = [];
    for(const ar of arr){
        if(ar % 2 === 0){
            // console.log("Even: ", ar);
            even.push(ar);
        }
        
        // else{
        //     console.log("Odd: ", ar);
        // }
    }
    return even;
    
}

const res = arrEven([1,2,4,5,9,7]);

let result = 0;
for(const res1 of res){
    result = result + res1;
    
}

console.log("Total Sum: ", result);



