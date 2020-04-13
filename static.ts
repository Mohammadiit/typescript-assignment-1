class Cylinder {
    static pi: number = 3.14;

    public radius: number; public height: number;

    constructor (radius, height) {
        this.radius = radius;
        this.height = height;
    }
    
    public calculateArea(radius:number) {
        return Cylinder.pi * radius * this.height;
    }
}
let c1 = new Cylinder(3,4); 
c1.calculateArea(5); 



class Cones {
    static pi: number = 3.14;
    
    static calculateArea(radius:number, height) {
        return this.pi * radius * radius* 0.33;
    }
}
 // returns 3.14
Cones.calculateArea(5,4); 

class Student {
    static numberOfStudent = 0;
    public name ;
    constructor ( name ) {
        this.name = name;
        Student.numberOfStudent++;
    }


}

let studnet1 = new Student ("Kamal");
let studnet2 = new Student ("Jamal");

console.log (Student.numberOfStudent);
