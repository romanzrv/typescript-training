export class SomeClass {
    private _id: number;

    // Setter
    set id(id: number) {
        this._id = id;
    }

    // Getter
    get id(){
        return this._id;
    }
}

let h: SomeClass = new SomeClass();

// Getter
let myId = h.id;

// Setter
h.id = 1;
