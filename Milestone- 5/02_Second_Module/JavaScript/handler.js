console.log("Handler file ADDED");


// Option-1: Event Handler

        document.getElementById('btn-update-title').addEventListener('click', function btnUpdate(){
            const titleText = document.getElementById('title-text');
            titleText.innerText = 'Updated Page Title Text';
            
        })