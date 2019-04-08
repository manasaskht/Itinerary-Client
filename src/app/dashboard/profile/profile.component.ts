import { Component, OnInit } from '@angular/core';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MatDialog, MatDialogRef } from '@angular/material';
import { UserProfile } from './UserProfile';
import { ProfileService } from './shared/providers/profile.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    fileToUpload: File = null;
    imageSrc: any;
    dialogRef: MatDialogRef<EditProfileComponent>;
    userProfile: UserProfile;
    firstName: any;
    lastName: any;
    email: any;
    age: any;
    sex: any;
    bio: any;
    constructor(private sanitizer: DomSanitizer, private dialog: MatDialog, private profileService: ProfileService) { }

    ngOnInit() {
        this.imageSrc = 'assets/imgs/profile_img.png';
        this.fetchProfileData()
    }

    upload(files: FileList) {
        const file = files[0];
        this.fileToUpload = file;
        const reader = new FileReader();
        reader.onload = e => this.imageSrc = reader.result;
        reader.readAsDataURL(file);
        this.profileService.saveProfile(this.fileToUpload)
            .subscribe(res => {
                this.dialogRef.close();
            });
    }

    edit() {
        this.dialogRef = this.dialog.open(EditProfileComponent, {
            data: { firstName: this.firstName, lastName: this.lastName, email: this.email, age: this.age, sex: this.sex, bio: this.bio }
        });
        this.dialogRef.afterClosed().subscribe(result => {
            if (result) {
                console.log('The dialog was closed');
                this.firstName = result['firstName'];
                this.lastName = result['lastName'];
                this.age = result['age'];
                this.sex = result['sex'];
                this.bio = result['bio'];
                console.log(result);
            }

        });
    }


    fetchProfileData() {
        this.profileService.userProfileFetch().subscribe((items: any) => {
            this.userProfile = items;
            this.firstName = this.userProfile['firstName'];
            this.lastName = this.userProfile['lastName'];
            this.email = this.userProfile['emailAddress'];
            this.age = this.userProfile['age'];
            this.sex = this.userProfile['sex'];
            this.bio = this.userProfile['bio'];
        });
        this.profileService.userImageFetch().subscribe(data => {
            if (data) {
                this.createImageFromBlob(data);
            }
        },
            error => { });
    }

    createImageFromBlob(image: Blob) {
        let reader = new FileReader();
        reader.addEventListener("load", () => {
            this.imageSrc = reader.result;
        }, false);

        if (image) {
            reader.readAsDataURL(image);
        }
    }
}
