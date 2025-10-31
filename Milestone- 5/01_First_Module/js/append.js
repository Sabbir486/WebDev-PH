// 1. Where to Add?
const placesList = document.getElementById('places-list');

// 2. What to be Added?
const li = document.createElement('li');
li.innerText = 'PaharToli';

// 3. Add the Child
placesList.appendChild(li);



// 1. Where to Add?
const mainContent = document.getElementById('main-content');
// console.log(mainContent);


// 2. What to be Added?
const section = document.createElement('section');

const h1 = document.createElement('h1');
h1.innerText = 'I am Sabbir';
section.appendChild(h1);

const ul = document.createElement('li');

const li1 = document.createElement('li');
li1.innerText = 'Biriyani';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Burhani';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Kacchi';
ul.appendChild(li3);

section.appendChild(ul);

mainContent.appendChild(section)



// set innerHTML directly

const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My dress section</h1>
<ul>
    <li> Shirt </li>
    <li> Pant </li>
</ul>
`

mainContent.appendChild(sectionDress);