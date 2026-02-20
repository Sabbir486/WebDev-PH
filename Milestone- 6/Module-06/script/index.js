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
        <div class="card bg-base-100">
        <figure class="relative">
            <img class="w-full h-[150px] object-cover"
            src="${vid.thumbnail}"
            alt="Shoes" />

            <span class="absolute bottom-2 right-2 text-white bg-black px-2 text-sm rounded">3hrs 56 min ago</span>
        </figure>

        <div class="flex gap-2 px-0 py-5">
            <div class="profile">
                <div class="avatar">
                    <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring-2 ring-offset-2">
                        <img src="${vid.authors[0].profile_picture}" />
                    </div>
                </div>
            </div>

            <div class="intro">
                <h2 class="text-sm font-semibold">Midnight Serenade</h2>
                <p class="text-sm text-gray-400 flex gap-1">${vid.authors[0].profile_name} <img class="w-5 h-5" src="https://img.icons8.com/?size=32&id=6xO3fnY41hu2&format=png" alt=""></p>

                <p class="text-sm text-gray-400">${vid.others.views}</p>
            </div>
        </div>
        </div>
        `;

        videoContainer.append(videoCard);
    }
    
}

loadCategories();
loadVideos();
