type curtessianPoint = {
    readonly x: number;
    readonly y: number;
  };
const position : curtessianPoint = { x: 30, y: 0 };



// example 2




class Triangle {

    readonly color: string = "green";
    readonly numberOfSide : number =3;
    readonly dimension : number = 2;
    public side1:number;public side2: number; public side3: number;

    

    constructor (side1, side2, side3) {
        this.side1= side1;
        this.side2 = side2;
        this.side3 = side3;
    }



}

var triangle1 = new Triangle (3,4,5);


// example 3




class School {
    readonly country : string = "Bangladesh";

    public name : string

    constructor (name) {
        this.name = name;
    }

}

let school1 = new School("X high school"); 

