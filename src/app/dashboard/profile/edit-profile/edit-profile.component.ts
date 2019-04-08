import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProfileComponent } from '../profile.component'
import { ProfileService } from '../shared/providers/profile.service';
import { Utilities } from 'src/app/shared/utilities/utils.helper';
import { FormGroup, FormControl, Validators } from '@angular/forms'

export interface DialogData {
    firstName: string;
    lastName: string;
    age: number;
    sex: string;
    bio: string;
}


@Component({
    selector: 'app-edit-profile',
    templateUrl: './edit-profile.component.html',
    styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
    fileToUpload: File = null;
    editProfile: FormGroup;
    imageSrc: any;
    sexList = [];
    constructor(public dialogRef: MatDialogRef<ProfileComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData, private profileService: ProfileService) {
        this.sexList = Utilities.sex;
        this.editProfile = new FormGroup({
            firstName: new FormControl(data.firstName || '', [Validators.pattern("^[A-Za-z]+$"), Validators.required]),
            lastName: new FormControl(data.lastName || '', [Validators.pattern("^[A-Za-z]+$"), Validators.required]),
            age: new FormControl(data.age || '', [Validators.pattern("^[0-9]*$"), Validators.required]),
            sex: new FormControl(data.sex || '', [Validators.required]),
            bio: new FormControl(data.bio || '', [Validators.required])
        });
    }

    ngOnInit() {

    }
    upload(files: FileList) {
        const file = files[0];
        this.fileToUpload = file;
        const reader = new FileReader();
        reader.onload = e => this.imageSrc = reader.result;
        reader.readAsDataURL(file);
    }
    save(data: DialogData) {
        if (this.editProfile.invalid) {
            return;
        }
        let editProfileValues = this.editProfile.value;
        this.profileService.updateProfile(editProfileValues).subscribe((items: any) => {
            this.dialogRef.close(editProfileValues);
            // console.log(items.message);
        });
    }
    cancel() {
        this.dialogRef.close();
    }
}
