class Librarian {
    constructor (public libraryName : String, public joiningDate : String) {

    }
}

let librarian1 =  new Librarian ("Kamal", "25/03/1999");


// example 2




class Labour {
    constructor (private _wage : number) {

    }

    set wage ( _wage ) {
        this._wage = _wage;
    }

    get wage () : number {
        return this._wage;
    }
}



// example 3




class Park {
    constructor (private _location : String){}

    set location (_location : String ) {
        this._location = _location;
    }

    get location () : String {
        return this._location;
    }
}
