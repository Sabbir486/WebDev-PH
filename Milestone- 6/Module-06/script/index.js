console.log("Index is connected");

function loadCategories(){
    //fetch the Data

    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((res) => res.json() )
        .then((data) => displayCategories(data.categories))

        // data.categories --> Array of Object
    
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

loadCategories();
