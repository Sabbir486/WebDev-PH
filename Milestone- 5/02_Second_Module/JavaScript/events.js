console.log('External File');

// Option-2: Event Handler (Using Function)

        function makeYellow() {
            document.body.style.backgroundColor = 'yellow';
        }

        function makeRed() {
            document.body.style.backgroundColor = 'red';
        }

// Option-3: Event Handler (Another Method)

        const btnMakeBlue = document.getElementById('btn-make-blue')
        // console.log(btnMakeBlue);
        
        btnMakeBlue.onclick = function makeBlue(){
            document.body.style.backgroundColor = 'blue';
        }