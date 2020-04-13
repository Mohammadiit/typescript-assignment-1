class Individual {
    firstName: String;
    lastName: String;
}

interface Employee1 extends Individual{
    salary : number;
}

let employee13 : Employee1 = {

    firstName : "Abul",
    lastName : "Kalam",
    salary : 200
}

class SquareSize {
    height: number;
    width: number;
}
interface ColoredSquare extends SquareSize {
    color : String;
}

class Department {
    name : String;
    subjectName : String;
}

interface Institute {
    directorName : String;
}
