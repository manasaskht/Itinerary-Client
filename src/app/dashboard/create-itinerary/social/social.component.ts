import { Component, Inject, OnInit } from '@angular/core';
import { Friend } from '../friend';
import { Group } from '../group';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Utilities } from 'src/app/shared/utilities/utils.helper';
import { FriendsService } from '../friends.service';
import { GroupsService } from '../group.service';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { GroupsService, GroupsService } from '../groups.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {

  social = false;
  addFriend = false;
  emailForm: FormGroup;
  friendsService: FriendsService;
  groupsService: GroupsService;
  friends: Friend[] = [];
  // groups: Group[] = [];
  constructor(
    public dialogRef: MatDialogRef<SocialComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient,
    friendsService: FriendsService,
    groupsService: GroupsService
  ) {
    this.emailForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern(Utilities.emailPattern)])
    });
    console.log(this.emailForm);
    this.friendsService = friendsService;
    this.groupsService = groupsService;
  }

  ngOnInit() {
    this.updateFriendsList();
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
    if (confirm('Are you sure you want to delete ' + friend.name)) {
      this.friendsService.deleteFriend(friend.id).subscribe(results => {
        this.updateFriendsList();
      });
    }
  }

  addToItinerary(friend): void {

  }
}
