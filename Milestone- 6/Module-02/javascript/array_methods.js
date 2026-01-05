const products = [
    {id:1, name:'iphone', color:'black', price:1200, brand:'apple'},
    {id:2, name:'realme', color:'gold', price:1100, brand:'xiomi'},
    {id:3, name:'redmi', color:'orange', price:900, brand:'readmi'},
    {id:4, name:'nok', color:'blue', price:1500, brand:'nokia'},
    {id:5, name:'xiomi', color:'gold', price:1800, brand:'xiaomi'}
]


// forEach ---> Nothing return

// products.forEach(product => {
//     //  console.log(product);
//     if(product.color === 'gold'){
//         console.log(product);
        
//     }
     
// })


// filter ---> Return a new Array by using conditions

// const newProducts = products.filter(product => {
//     if(product.price > 1000){
//         console.log(product);
        
//     }
// })


// find ---> Always give the first matched result

const product = products.find(p => p.id === 4);
console.log(product);
