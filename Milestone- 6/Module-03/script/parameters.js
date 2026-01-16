// Pass by Value and Pass by Reference

let Name = 'ma';

function test(text){
    console.log(text);

}

test(Name);

// ---------------------------------------------

const per = {name:'sabbir', age:25};  //Object

function sum2(obj){
    obj.name = 'rony';
}

sum2(per);

console.log(per);
