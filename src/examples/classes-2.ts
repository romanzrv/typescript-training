import Person from "./classes";

class Main {
    constructor() {
    }

    public main(): void {
        let person: Person = new Person('Santiago', 'Membrillano');
        console.log(person.getFullName());
    }
}
