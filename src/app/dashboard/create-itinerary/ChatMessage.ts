// A class for chat messages
export class ChatMessage {
    id: string;
    message: string;
    createdAt: number;
    sender: string;
    senderName: string;
    group: string;
    constructor(object) {
        this.id = object.id;
        this.message = object.message;
        this.createdAt = object.createdAt;
        this.sender = object.sender;
        this.group = object.group;
        this.senderName = object.senderName;
    }
}
