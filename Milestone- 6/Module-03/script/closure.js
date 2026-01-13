// let counter = 0;

function sum(){
    let counter = 0;
    // counter +=1;
    // console.log(counter);

    return function (){
        counter +=1;
        console.log(counter);
        
    }
    
}

const result3 = sum()
result3();
result3();