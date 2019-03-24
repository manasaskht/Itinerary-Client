class ServerUrls {
    private static serverUrlInstance: ServerUrls;

    private serverUrl: string = 'http://localhost:1337/';

    private constructor() { }

    public static getInstance() {
        if (!ServerUrls.serverUrlInstance) {
            ServerUrls.serverUrlInstance = new ServerUrls();
        }
        return ServerUrls.serverUrlInstance;
    }

    get googleApiKey() { return 'AIzaSyD70Y18ljkRb83lDVBbS-E3HfGU6SzDc7s'; }

    get login() { return this.serverUrl + 'account/login/'; }
    get register() { return this.serverUrl + 'account/register/'; }
    get logout() { return this.serverUrl + 'account/logout/'; }
    get activate() { return this.serverUrl + 'account/activate/'; }

    get newItinerary() { return this.serverUrl + 'itinerary/new'; }
    get newItineraryItem() { return this.serverUrl + 'itinerary/item/new'; }

    get listItinerary() { return this.serverUrl + 'itinerary/ls' }
    get listItineraryItems() { return this.serverUrl + 'itinerary/item/ls' }

    get createNote() { return this.serverUrl + 'itinerary/notes/new'; }
    get updateNote() { return this.serverUrl + 'itinerary/notes/update'; }
    get deleteNote() { return this.serverUrl + 'itinerary/notes/delete'; }
    get listNotes() { return this.serverUrl + 'itinerary/notes/list'; }

    get deleteItineraryItem() { return this.serverUrl + 'itinerary/item/delete'; }
    get editItineraryItem() { return this.serverUrl + 'itinerary/item/edit'; }

    get googlePlaces() { return 'https://maps.googleapis.com/maps/api/place/autocomplete/json'; }

    get addFriend() { return this.serverUrl + 'social/addfriend'; }
    get getFriends() { return this.serverUrl + 'social/getfriends';}
    get deleteFriends() { return this.serverUrl + 'social/deletefriend';}

    get createGroup() { return this.serverUrl + 'social/creategroup';}
    get getGroups() { return this.serverUrl + 'social/getgroups';}
}

export const serverUrls = ServerUrls.getInstance();
