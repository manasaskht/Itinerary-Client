import { Component, OnInit } from '@angular/core';
import { Friend } from '../friend';
import { Group } from '../group';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Utilities } from 'src/app/shared/utilities/utils.helper';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {

  social = false;
  addFriend = false;
  emailForm: FormGroup;
  // friends: Friend[] = [];
  // groups: Group[] = [];
  constructor() {
    this.emailForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern(Utilities.emailPattern)])
    });
    console.log(this.emailForm);
   }

  ngOnInit() {
  }

  toggleSocial(): void {
    this.social = !this.social;
  }

  toggleAddFriend(): void {
    this.addFriend = !this.addFriend;
  }

}
