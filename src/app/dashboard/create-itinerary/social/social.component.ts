import { Component, Inject, OnInit } from '@angular/core';
import { Friend } from '../friend';
import { Group } from '../group';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Utilities } from 'src/app/shared/utilities/utils.helper';
import { FriendsService } from '../friends.service';
import { GroupService } from '../group.service';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ChatService } from '../chat.service';

// An interface for recieving data from the page that calls this dialog box
export interface DialogData {
    id: string;
    title: string;
}

@Component({
    selector: 'app-social',
    templateUrl: './social.component.html',
    styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {

    // Check if the add friend button is clicked
    addFriend = false;

    // Check if the delete friend button is clicked
    deleteClicked = false;

    // A form group for email input for adding a friend
    emailForm: FormGroup;

    // Services for friends and groups
    friendsService: FriendsService;
    groupService: GroupService;
    chatService: ChatService;

    // Arrays of friends and groups
    friends: Friend[] = [];
    groups: Group[] = [];
    expandGroup: Friend[] = [];
    selectedGroup: Group;
    groupExists: boolean;

    constructor(
        public dialogRef: MatDialogRef<SocialComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
        private http: HttpClient,
        friendsService: FriendsService,
        groupService: GroupService,
        chatService: ChatService
    ) {
        // Add validations to the email form
        this.emailForm = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.pattern(Utilities.emailPattern)])
        });

        // Initialize services
        this.friendsService = friendsService;
        this.groupService = groupService;
        this.chatService = chatService;

        // Create a group for this itinerary if it does not exist
        this.groupExists = false;
        this.getGroups();
    }

    ngOnInit() {
        // Update friend and group lists on startup
        this.updateFriendsList();
        this.getGroups();
    }

    // Toggle displaying the inputs for adding new friends
    toggleAddFriend(): void {
        this.addFriend = !this.addFriend;
    }

    // Call the service to add a friend and update the list
    addAFriend(): void {
        this.friendsService.addFriend(this.emailForm.value.email).subscribe(results => {
            this.updateFriendsList();
            this.addFriend = false;
        });
    }

    // Updates the friends list
    updateFriendsList(): void {
        this.friends = [];
        this.friendsService.getFriends().subscribe((results: Array<any>) => {
            results.forEach(element => {
                this.friends.push(new Friend(element));
            });
        });
    }

    // Closes the social dialog box
    closeDialog(): void {
        this.dialogRef.close();
    }

    // Call the service to delete a friend and update the list
    deleteFriend(friend): void {
        this.deleteClicked = true;
        if (confirm('Are you sure you want to delete ' + friend.name)) {
            this.friendsService.deleteFriend(friend.id).subscribe(results => {
                this.updateFriendsList();
            });
        }
    }

    // This feature adds friends and groups to chat window. Chat is a separate feature and will be implemented in the future
    addToItinerary(friend): void {
        if (!this.deleteClicked) {
            this.chatService.addToItinerary(friend.id, this.data.id).subscribe(results => {
                console.log(results);
            });
            this.groupService.addMember(friend.id, this.data.id).subscribe(results => {
                this.getGroups();
            });
        }
        this.deleteClicked = false;
    }

    addGroupToItinerary(group): void {
        if (group.name !== this.data.title) {
            this.chatService.addGroupToItinerary(group.name, this.data.id).subscribe(results => {
                this.getGroups();
            });
        }
    }

    // Create a group by calling the service and update the list
    createGroup(): void {
        this.groupService.createGroup(this.data.id, this.data.title).subscribe(reuslts => {
            this.getGroups();
        });
    }

    // Get a list of groups
    getGroups(): void {
        this.groups = [];
        this.groupService.getGroups().subscribe((results: Array<any>) => {
            results.forEach(group => {
                if (this.groups.findIndex(existing => existing.name === group.title) < 0) {
                    this.groups.push(new Group(group));
                }
            });
            if (!this.groupExists && (this.groups.findIndex(group => group.name === this.data.title) < 0)) {
                this.groupExists = true;
                this.createGroup();
            }
            this.toggleGroup(this.selectedGroup);
        });
    }

    toggleGroup(group): void {
        if (!!this.selectedGroup) {
            this.selectedGroup = null;
        } else {
            this.selectedGroup = group;
        }
    }

    removeFromItinerary(friend): void {
        this.chatService.removeFromItinerary(this.data.id, friend.id).subscribe(results => {
            this.getGroups();
        });
    }
}
