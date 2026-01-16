// Callback Function

function ghotok(patri, name) {
    // console.log('Hello..!!', patri);
    patri(name);
    
}

const patri1 = function(name){
    console.log("I am done", name);
    
};

const patri2 = function(name){
    console.log("I am done", name);
    
};

ghotok(patri1, 'sa');
ghotok(patri2, 'raaaa');