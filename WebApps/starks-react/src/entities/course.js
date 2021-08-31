export class Course {
    id;
    code;
    name;
    description;
    state;
    constructor(id, code, name, description) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.description = description;
        this.state = 0;
    }
}