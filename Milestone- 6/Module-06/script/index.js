console.log("Index is connected");

function loadCategories(){
    //fetch the Data

    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((res) => res.json() )
        .then((data) => displayCategories(data.categories))

        // data.categories --> Array of Object
    
}

function loadVideos(){
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then ((res) => res.json())
    .then((data) => displayVideos(data.videos)
    )
}

function displayCategories(categories){
    // get the container
    const categoryContainer = document.getElementById('category-container');


    // Loop Operation on Array of Object
    for(let cat of categories){
        console.log(cat);
        
        // CREATE Element
        const categoryDiv = document.createElement('div');
        categoryDiv.innerHTML = `
        <button class="btn btn-sm hover:bg-[#ff1f3d] hover:text-white">${cat.category}</button>
        `;

        // Append Element
        categoryContainer.append(categoryDiv);
    }

}

const displayVideos=(videos) => {
    
    const videoContainer = document.getElementById('video-container');

    for(let vid of videos){

        const videoCard = document.createElement('div');
        videoCard.innerHTML = `
        <div class="card bg-base-100 shadow-sm">
        <figure>
            <img
            src="${vid.thumbnail}"
            alt="Shoes" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">${vid.title}</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        </div>
        `;

        videoContainer.append(videoCard);
    }
    
}

loadCategories();
loadVideos();
