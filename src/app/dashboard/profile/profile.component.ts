import { Component, OnInit } from '@angular/core';
import {EditProfileComponent} from './edit-profile/edit-profile.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { UserProfile } from './UserProfile';
import { ProfileService } from './shared/providers/profile.service';
@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    fileToUpload: File = null;
    imageSrc:any;
    fileNameDialogRef: MatDialogRef<EditProfileComponent>;
    userProfile:UserProfile;
    constructor(private dialog: MatDialog, private profileService: ProfileService) { }
    
    ngOnInit() {
        this.fetchProfileData()
    }
    upload(files: FileList) {
        const file = files[0];
        const reader = new FileReader();
        reader.onload = e => this.imageSrc = reader.result;
        reader.readAsDataURL(file);
      }
      edit()
      {
        this.fileNameDialogRef = this.dialog.open(EditProfileComponent);
      }
      fetchProfileData()
      {
        this.profileService.userProfileFetch().subscribe((items: any) => {
            this.userProfile = items;
            console.log(this.userProfile);
        })
         
      }
}
