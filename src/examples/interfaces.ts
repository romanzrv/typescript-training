interface IEmployee {
    empCode: number;
    empName: string;
    getSalary: (arg0: number) => number;
    getManagerName(arg0: number): string;
}

interface Person {
    firstName: string;
    lastName: string;
}

let user = { firstName: "Jane", lastName: "User" };

function getName(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

getName(user);