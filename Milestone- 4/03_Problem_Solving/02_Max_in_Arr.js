// Max

const heights = [65,68,71,75,58,65]

 function getMax(nums){

    let max = nums[0];
    for(const num of nums ){
        
        if(num > max){
            max = num;
        }
    }
    return max;
 }

 const Max = getMax(heights);
 console.log(Max);
 console.log();
 

//  Min

function getMin(number){

    let min = number[0]
    for(const num of number){
        if(num < min){
            min = num;
        }
    }
    return min;
}

const min = getMin(heights);
console.log(min);

 