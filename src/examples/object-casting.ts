let myObject: Person;
let otherObject: any;

myObject = <Person> otherObject;     // Usando <>
myObject = otherObject as Person;    // Usando 'as'