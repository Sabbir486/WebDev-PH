const loadUser = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        displayUser2(data);
        
    })
    
}

const displayUser2 = (users) => {
    // console.log(users);
    const userContainer = document.getElementById('users');

    for(let i =0; i<users.length; i++){
        const user = users[i];

        const li = document.createElement('li');
        li.innerText = user.name;
        userContainer.appendChild(li);
        
        // console.log(user);
        
    }
    
}