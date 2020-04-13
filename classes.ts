class test {
    isOk : boolean;
    constructor (isOk) {
        this.isOk = isOk;
    }
}

var ok = new test (true);
var notOk = new test (false);


class appology {
    statement : string;

    constructor (statement){
        this.statement = statement;
    }
    printStatement(){
        console.log (this.statement);
    }
}

let appologyToAll = new appology ('Appology to all');

appologyToAll.printStatement();

class car {
    model : string;
    price = 2000000;

    constructor (model){
        this.model = model;
    }
    checkPrice(price){

        if ( price >= this.price ) {
            console.log ( "affordable" );
        }
         
        else {
            console.log ("not affordable");
        }
    }
}

let testCar = new car ('Ferrari v8');

console.log (testCar.checkPrice (100000));
