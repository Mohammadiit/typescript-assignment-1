class Investor {
    private _name : String;

    get name () : String {
        return this._name;
    }

    set name (name : String) {
        this._name = name;
    }

}

class BusinessMan {
    private _businessType : String;

    get businessType () : String {
        return this._businessType;
    }

    set businessType (businessType : String) {
        this._businessType = businessType;
    }
}


class Actor {
    private _actingRole : String;

    get actingRole () : String {
        return this._actingRole;
    }

    set actingRole (actingRole : String) {
        this._actingRole = actingRole;
    }
}