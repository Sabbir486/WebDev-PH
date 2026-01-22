//  const handleUser = () => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
        
//     })

//     .catch(error => console.log("Catch Error Successfully", error))
//  }

//  handleUser();


const num1 = 10;
const num2 = 20;


//async function
const handleUser2 = async() => {
    const response =await fetch('https://jsonplaceholder.typicode.com/users')

    const data = await response.json();
    console.log(data);
    
}

handleUser2();

const result = num1+num2;
console.log(result);
console.log('Hello..!!');

