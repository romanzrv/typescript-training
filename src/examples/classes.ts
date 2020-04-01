class Person {
    private fullName: string;

    constructor(firstName: string, lastName: string) {
        this.fullName = `${firstName} ${lastName}`;
    }

    public getFullName(): string {
        return this.fullName;
    }

    public setFullName(firstName: string, lastName: string) {
        this.fullName = `${firstName} ${lastName}`;
    }
}

export default Person;
