import { Component, OnInit } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';
import {FormControl, Validators} from '@angular/forms';


export interface FeedType {
  name: string;
  sound: string;
}

@Component({
  selector: 'app-user-feedback',
  templateUrl: './user-feedback.component.html',
  styleUrls: ['./user-feedback.component.scss']
})


export class UserFeedbackComponent implements OnInit {

  constructor() { }
 
  ngOnInit() { }
 
  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    //  alert(`Old Value:${$event.oldValue}, 
    //    New Value: ${$event.newValue}, 
    //    Checked Color: ${$event.starRating.checkedcolor}, 
    //    Unchecked Color: ${$event.starRating.uncheckedcolor}`)
    //;
  }
  feedbackType = new FormControl('', [Validators.required]);
  
  feeds: FeedType[] = [
    {name: 'Feature Request', sound: 'You can request for a feature using this option!'},
    {name: 'Bug Report', sound: 'You can report a bug using this option!'},
    {name: 'Speed/Performance', sound: 'You can report about the speed/performance of this website!'},
    {name: 'Efficiency/Workflow', sound: 'You can report about the efficiency/workflow of this website!'},
    {name: 'Design/Ease of use', sound: 'You can report about the design/usability of this website!'},
  ];

   quest1Control = new FormControl('', [
  //   Validators.required,
  //   Validators.email,
   ]);
  
}
