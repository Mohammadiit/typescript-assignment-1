function display<T>(args:T) {
    console.log (args);
}


// for string
let result1 = display<string>("Hello World");

// for number
let result2 = display<number>(200);


class ManipulateVariables<T> {
    operation: (x: T, y: T) => T;
}

let substractNumber = new ManipulateVariables<number>();
substractNumber.operation = function(x, y) { return x + y; };

class MapData<K,V>
{ 
    private key: K;
    private val: V;

    displayData(key: K, val: V): void { 
        this.key = key;
        this.val = val;
        console.log(`Key = ${this.key}, val = ${this.val}`);

    }

}

let kvp1 = new MapData<number, string>();
kvp1.displayData(1, "Steve");
