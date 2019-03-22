import { Component, OnInit } from '@angular/core';
import { Friend } from '../friend';
import { Group } from '../group';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Utilities } from 'src/app/shared/utilities/utils.helper';
import { FriendsService } from '../friends.service';
import { HttpClient } from '@angular/common/http';

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
  friends: Friend[] = [];
  // groups: Group[] = [];
  constructor(private http: HttpClient, friendsService: FriendsService) {
    this.emailForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern(Utilities.emailPattern)])
    });
    console.log(this.emailForm);
    this.friendsService = friendsService;
   }

  ngOnInit() {
    
  }

  toggleSocial(): void {
    this.social = !this.social;
    this.updateFriendsList();
  }

  toggleAddFriend(): void {
    this.addFriend = !this.addFriend;
  }

  addAFriend(): void {
    this.friendsService.addFriend(this.emailForm.value.email).subscribe(results =>{
    console.log(results);
    });
    this.updateFriendsList();
  }

  updateFriendsList(): void {
    this.friends = [];
    this.friendsService.getFriends().subscribe((results: Array<any>) => {
      console.log(results);
      results.forEach(element => {
        this.friends.push(new Friend(element));
      });
    });
  }
}
