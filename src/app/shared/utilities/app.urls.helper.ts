class ServerUrls {
    private static serverUrlInstance: ServerUrls;

    private serverUrl = 'http://localhost:1337/';

    private constructor() { }

    public static getInstance() {
        if (!ServerUrls.serverUrlInstance) {
            ServerUrls.serverUrlInstance = new ServerUrls();
        }
        return ServerUrls.serverUrlInstance;
    }

    get googleApiKey() {
        return 'AIzaSyD70Y18ljkRb83lDVBbS-E3HfGU6SzDc7s';
    }

    get login() {
        return this.serverUrl + 'account/login/';
    }
    get forgotPwd() {
        return this.serverUrl + 'account/forgotPwd/';
    }
    get resetPwd() {
        return this.serverUrl + 'account/reset/';
    }
    get register() {
        return this.serverUrl + 'account/register/';
    }
    get logout() {
        return this.serverUrl + 'account/logout/';
    }
    get activate() {
        return this.serverUrl + 'account/activate/';
    }

    get newItinerary() {
        return this.serverUrl + 'itinerary/new';
    }
    get newItineraryItem() {
        return this.serverUrl + 'itinerary/item/new';
    }

    get listItinerary() {
        return this.serverUrl + 'itinerary/ls';
    }
    get listItineraryItems() {
        return this.serverUrl + 'itinerary/item/ls';
    }

    get createNote() {
        return this.serverUrl + 'itinerary/notes/new';
    }
    get updateNote() {
        return this.serverUrl + 'itinerary/notes/update';
    }
    get deleteNote() {
        return this.serverUrl + 'itinerary/notes/delete';
    }
    get listNotes() {
        return this.serverUrl + 'itinerary/notes';
    }

    get deleteItineraryItem() {
        return this.serverUrl + 'itinerary/item/delete';
    }
    get editItineraryItem() {
        return this.serverUrl + 'itinerary/item/edit';
    }

    get googlePlaces() {
        return 'https://maps.googleapis.com/maps/api/place/autocomplete/json';
    }

    get addFriend() {
        return this.serverUrl + 'social/friend/add';
    }
    get getFriends() {
        return this.serverUrl + 'social/friend/get';
    }
    get deleteFriends() {
        return this.serverUrl + 'social/friend/delete';
    }

    get createGroup() { return this.serverUrl + 'social/group/create'; }
    get getGroups() { return this.serverUrl + 'social/group/get'; }
    get addMember() { return this.serverUrl + 'social/group/member/add'; }

    get addToItinerary() { return this.serverUrl + 'chat/friend/add'; }
    get addGroupToItinerary() { return this.serverUrl + 'chat/group/add'; }
    get getMembers() {
        return this.serverUrl + 'social/group/member/get';
    }
    get removeMembers() { return this.serverUrl + 'chat/friend/remove'; }

    get sendMessage() { return this.serverUrl + 'chat/message/send'; }
    get getMessages() { return this.serverUrl + 'chat/message/get'; }

    get activateUser() {
        return this.serverUrl + 'account/activate';
    }
}

export const serverUrls = ServerUrls.getInstance();
