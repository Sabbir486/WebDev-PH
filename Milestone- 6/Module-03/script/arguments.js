function sum(a,b,c){
    // console.log(a,b,c);
    console.log(arguments); //Array like Object
                            //Arguments always stays in function

    const newArg = [...arguments]
    console.log(newArg);
    
    
    
}

sum(10,20,30);

console.log(sum.length);
