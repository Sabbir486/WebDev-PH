const products = [
    {name: 'shampoo', price: 300},
    {name: 'chiruni', price: 100},
    {name: 'shirt', price: 600},
    {name: 'pant', price: 900},
]

function getTotal(products){

    let total = 0;
    for(const product of products){
        total = total + product.price
    }
    return total;
}

const total = getTotal(products);
console.log(total);
