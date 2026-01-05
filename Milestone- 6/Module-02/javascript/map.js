// Map --> Loop --> Always Return an new Array

const numbers = [1,2,3,4,5,6,7];

// let temp = [];
// for(let i=0; i<numbers.length; i++){
//     const ele = numbers[i];
//     const sum = ele + 1;
//     temp.push(sum);
// }

// console.log(temp);


// Case-01

const newArr = numbers.map(ele => {
    return ele+1;
});

console.log(newArr);


// Case-02

const square = numbers.map(ele => ele*ele);

console.log(square);

// Case-03

const friends = ['ra', 'ka', 'ha', 'ta'];

const newFriends = friends.map((element, index) => {
    return index,element;
});

console.log(newFriends);



