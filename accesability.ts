class Employee {
    public name : string;
    public companyName : string;

    constructor (name, companyName) {
        this.name = name;
        this.companyName = companyName;
    }

}

let employee1 = new Employee ("Kalam", "KSRM");

class MonthlySalariedEmployee extends Employee {
    private salary : number ;

    constructor (name, companyName, salary) {
        super (name, companyName);
        this.salary;
    }
}
class WeeklySalariedEmployee extends Employee {
    private salary : number ;
    protected weekCount :number;

    constructor (name, companyName, salary, weekCount) {
        super (name, companyName);
        this.salary = salary;
        this.weekCount = weekCount;
    }
}


class RealstateEmployee extends WeeklySalariedEmployee {
    public speciality : string;

    constructor (name, companyName, salary, weekCount, speciality) {
        super (name, companyName, salary, weekCount);
        this.speciality = speciality;
    }

}

let realstateEmployee = new RealstateEmployee ("Kalam", "KSRM", 200000, 4, "Engineer");
