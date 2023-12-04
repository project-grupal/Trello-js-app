class Task {
    static id = 1;

    constructor(name) {
        //asigna
        this.id = Task.id++;
        this.name = name;
    }
    //define un metodo istancia
    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    getId() {
        return Task.id;
    }
}