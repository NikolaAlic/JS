import { Entity } from "./entity";

export class Grade extends Entity {
    value;
    constructor(id, state, value) {
        super(id, state)
        this.value = value;
    }
}