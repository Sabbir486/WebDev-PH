// Max between 3

const jim = 56;
const kim = 58;
const mim = 55;

function getMax(jim, kim, mim){
    if(jim > kim && jim > mim){
        console.log("Jim is Bigger");
        
    }

    else if(kim > jim && kim > mim){
        console.log("Kim is Bigger");
        
    }

    else{
        console.log("Mim is bigger");
        
    }
}

const Bigger = getMax(jim,kim,mim);
console.log('--------------');


// Unlimited Number of Numbers-->

const max = Math.max(23,67,21,68,45,30);
console.log(max);

