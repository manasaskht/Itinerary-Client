// A class for groups which contains members added by the user
export class Group {
    name: string;
    members: string[];

    constructor(object) {
        this.name = object.title;
        this.members = object.members;
    }
}
