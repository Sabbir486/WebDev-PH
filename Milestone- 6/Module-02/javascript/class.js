// Class Declaration

class Product{
    // owner = 'sabbir';

    constructor(name, price, brand, owner){
        this.name = name;
        this.price = price;
        this.brand = brand;
        this.owner = owner;
        
    }

    details(){
        console.log('Details from Product', this.name);
        
    }
}

const iphone = new Product('iphone', 1200, 'apple', 'Rony');
const xioami = new Product('Readmi', 1500, 'Xioami', 'Sabbir');

iphone.details();
// console.log(iphone);
