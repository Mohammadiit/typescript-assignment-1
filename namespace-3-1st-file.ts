namespace ShapeVolume{  

    const pi = 3.1416

    export function Circle(radius : number){  
        return (4/3) * pi *radius*radius*radius;  
    }  

    export function Cylinder(radius : number, height : number){  
        return pi *radius*radius*height;  
    }  
}  


