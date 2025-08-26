function evenStr(str){
    const size = str.length;
    if(size%2 === 0){
        console.log("Even");
        return true;
    }

    else{
        console.log("Odd");
        return false;
        
    }
    
    
}

evenStr("Dhaka");
evenStr("Chittagong");
console.log("----------------");

function numberCount(num){
    const len = num.length; //Size of Array
    return len;
}

const result = numberCount([1,2,3,4,5,6,7,8]); //Array
console.log(result);

