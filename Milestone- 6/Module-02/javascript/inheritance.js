class vehicle{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    move(){
        console.log("I can Move");
        
    }
}

class bus extends vehicle{
    constructor(name, price, seat){
        super(name, price);
        this.seat = seat;
    }

    route(){
        console.log("Route: Dhaka to Cox");
        
    }
}

class truck extends vehicle{
    constructor(name, price, load){
        super(name, price);
        this.load = load;
    }
}

const greenLine = new bus('greenLine', 2000, 50);
console.log(greenLine);
