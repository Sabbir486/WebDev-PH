function oddAvg(num){

    let arr = [];
    let result = 0;
    for(const odd of num){
        if(odd % 2 !== 0){

            arr.push(odd);
            result = result + odd;
        }
    }
    len = arr.length;
    return result/len;
}

const avg = oddAvg([1,3,5]);
console.log("Average of Odd: ", avg);
