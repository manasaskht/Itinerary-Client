// A class that for friend of the user
export class Friend {
    id: string;
    email: string;
    name: string;
    constructor(object) {
        this.id = object.id;
        this.email = object.emailAddress;
        this.name = object.firstName + ' ' + object.lastName;
    }
}
