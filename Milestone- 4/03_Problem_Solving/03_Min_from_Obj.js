
// const prices = [20000, 30000, 15000, 100000, 10000];

// function getMin(numbers){

//     let min = numbers[0];
//     for(const num of numbers){
//         if(num < min){
//             min = num;
//         }
//     }
//     return min;
// }

// const cheap = getMin(prices);
// console.log("Cheapest Price: ", cheap);
// console.log();

const phones = [
    {name:'Nova', Price: 20000, camera: '12mp', color: 'black'},
    {name:'Shami', Price: 30000, camera: '12mp', color: 'black'},
    {name:'Oppo', Price: 25000, camera: '12mp', color: 'black'},
    {name:'iPhone', Price: 200000, camera: '12mp', color: 'black'},
]

function getCheap(phones){
    
    let min = phones[0]
    for(const phone of phones){
        if(phone.price < min.Price){
            min = phone
        }
    }
    return min;

}

const cheap = getCheap(phones);
console.log("Cheapest Phone: ", cheap);



