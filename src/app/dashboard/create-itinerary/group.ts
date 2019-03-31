import { Friend } from './friend';

// A class for groups which contains members added by the user
export class Group {
    name: string;
    members: Friend[];

    constructor(object) {
        this.name = object.title;
        this.members = [];
        object.members.forEach(element => {
            this.members.push(new Friend(element));
        });
    }
}
