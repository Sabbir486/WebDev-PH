const sections = document.querySelectorAll('section');

for(const section of sections){
    // console.log(section);
    section.style.border = '2px solid black';
    section.style.marginBottom = '10px';
    section.style.padding = '15px';
    section.style.borderRadius = '15px';
    
}

const placeContainer = document.getElementById('places-container');
placeContainer.classList.add('yellow-bg');