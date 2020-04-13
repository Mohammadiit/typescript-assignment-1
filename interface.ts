interface Square {
    height: number;
    width: number;
}

function calculateSquareArea (config : Square){
    return config.height * config.width;
}

let square1 : Square = { height : 2, width : 3}; 

interface SquareWithOptionalColor {
    height: number;
    width: number;
    color ?: string;
}

function displaySquare (config : SquareWithOptionalColor){
    console.log (config.height, config.width);
    if(config.color){
        console.log(config.color);
    }
}

let square : SquareWithOptionalColor = { height : 2, width : 3}; 
let blueSquare : SquareWithOptionalColor = { height : 2, width : 3, color: "blue"}; 


interface CountryName {
    [index: number]: string;
}
let countryArray1: CountryName = ["India", "China"];
const IndiaName = countryArray1[0];
console.log(IndiaName);
