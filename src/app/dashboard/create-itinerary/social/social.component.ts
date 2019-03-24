import { Component, Inject, OnInit } from '@angular/core';
import { Friend } from '../friend';
import { Group } from '../group';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Utilities } from 'src/app/shared/utilities/utils.helper';
import { FriendsService } from '../friends.service';
import { GroupService } from '../group.service';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

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

  social = false;
  addFriend = false;
  deleteClicked = false;
  emailForm: FormGroup;
  friendsService: FriendsService;
  groupService: GroupService;
  friends: Friend[] = [];
  groups: Group[] = [];
  constructor(
    public dialogRef: MatDialogRef<SocialComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private http: HttpClient,
    friendsService: FriendsService,
    groupService: GroupService
  ) {
    this.emailForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern(Utilities.emailPattern)])
    });
    console.log(this.emailForm);
    this.friendsService = friendsService;
    this.groupService = groupService;
    this.createGroup();
  }

  ngOnInit() {
    this.updateFriendsList();
    this.getGroups();
  }

  toggleAddFriend(): void {
    this.addFriend = !this.addFriend;
  }

  addAFriend(): void {
    this.friendsService.addFriend(this.emailForm.value.email).subscribe(results => {
      this.updateFriendsList();
      this.addFriend = false;
    });
  }

  updateFriendsList(): void {
    this.friends = [];
    this.friendsService.getFriends().subscribe((results: Array<any>) => {
      results.forEach(element => {
        this.friends.push(new Friend(element));
      });
    });
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  deleteFriend(friend): void {
    this.deleteClicked = true;
    if (confirm('Are you sure you want to delete ' + friend.name)) {
      this.friendsService.deleteFriend(friend.id).subscribe(results => {
        this.updateFriendsList();
      });
    }
  }

  addToItinerary(): void {
    if (!this.deleteClicked) {
      alert('This is part of a separate feature(Chat Feature) and will be implemented in the future');
    }
    this.deleteClicked = false;
  }

  createGroup(): void {
    this.groupService.createGroup(this.data.id, this.data.title).subscribe( reuslts => {
      this.getGroups();
    });
  }

  getGroups(): void {
    this.groupService.getGroups().subscribe((results: Array<any>) => {
      results.forEach(group => {
        this.groups.push(new Group(group));
      });
    });
  }
}
