interface Task {
    name: String;
    run(arg: any): void;
}

class MyTask implements Task {
    name: String;

    constructor(name: String) {
        this.name = name;
    }

    run(arg: any): void {
        console.log(`running: ${this.name}, arg: ${arg}`);
    }
}

let myTask: Task = new MyTask('insert coin');
myTask.run("test");