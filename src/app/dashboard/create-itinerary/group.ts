export class Group {
    name: string;
    members: string[];

    constructor(object) {
        this.name = object.title;
        this.members = object.members;
    }
}
