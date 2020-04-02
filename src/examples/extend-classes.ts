class Employee {
    constructor(name: string, age: number, mobile: string) {
    }
}

class Manager extends Employee {
    constructor(name : string, age: number , mobile : string){
        super(name,age,mobile);
    }
}
