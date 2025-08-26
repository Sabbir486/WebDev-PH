// Remove duplicate Value

function noDup(vals){

    let arr = [];
    for(const val of vals){

        if(arr.includes(val) === false){ //includes check is there any duplicate value
            arr.push(val);
        }
    }
    return arr;

}

const val = noDup([1,1,3,2,4,2,5,6,7])
console.log(val);
