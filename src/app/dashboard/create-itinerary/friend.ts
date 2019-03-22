export class Friend {
    email: string;
    name: string;
    constructor(object) {
        this.email = object.emailAddress;
        this.name = object.firstName + ' ' + object.lastName;
    }
}
