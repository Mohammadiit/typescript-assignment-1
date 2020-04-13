abstract class Car {
    name : string;

    constructor (name ){
        this.name = name;
    }

    abstract   intro() ;
    
}

class Audi extends Car {
    intro() {
        console.log ("Choose German quality");
    }
    
}

class Volvo extends Car {
    intro () {
        console.log (" Proud to be a swedish brand");
    }
}

// example 2

abstract class Loan {
    timeInMonth : number;
    amount : number;

    constructor (timeInMonth, amount) {
        this.timeInMonth = timeInMonth;
        this.amount = amount; 
    }

    abstract calculateInstallment();
} 

class CarLoan extends Loan {
    carPrice : number;


    constructor (timeInMonth, amount, carPrice) {
        super (timeInMonth, amount);
        this.carPrice = carPrice;
    }

    calculateInstallment () {
        console.log (this.carPrice * 2 * .03);
    }

}

class ConsumerLoan extends Loan {
    price : number;


    constructor (timeInMonth, amount, price) {
        super (timeInMonth, amount);
        this.price = price;
    }

    calculateInstallment () {
        console.log (this.price * 1.5 * .01);
    }

}
// example 3


abstract class Subordinate {

    name : string;
    age : number;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    abstract calculateSalary ();
}

class commisionedSubordinate extends Subordinate {
    commisionPercentage : number;
    salesAmount : number;

    constructor (name, age,commisionPercentage ,salesAmount ) {
        super (name, age);
        this.commisionPercentage = commisionPercentage;
        this.salesAmount = salesAmount;
    }
    calculateSalary (){
        console.log (this.commisionPercentage * this.salesAmount);
    }
}

class dailySubordinate extends Subordinate {
    dayCount : number;
    dailyAmount : number;

    constructor (name, age,dayCount ,dailyAmount ) {
        super (name, age);
        this.dayCount = dayCount;
        this.dailyAmount = dailyAmount;
    }
    calculateSalary (){
        console.log (this.dayCount * this.dailyAmount);
    }
}