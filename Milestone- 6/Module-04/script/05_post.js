const handlePost = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
        displayPost(data);
        
    })
    
}

const displayPost = (posts) => {
    // console.log(posts);

    const postId = document.getElementById('postId');

    for(const post of posts){
        const div = document.createElement('div');
        div.classList.add('card'); //CSS
        div.innerHTML = `
        <h1> ${post.title} </h1>
        <p>${post.body}</p>
        <button> Details </button>
        `;

        postId.appendChild(div);
        
    }
    
}

handlePost();