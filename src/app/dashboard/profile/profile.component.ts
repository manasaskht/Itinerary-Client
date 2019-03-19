import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    fileToUpload: File = null;
    imageSrc:any;
    constructor() { }

    ngOnInit() {
    }
    upload(files: FileList) {
        const file = files[0];
        const reader = new FileReader();
        reader.onload = e => this.imageSrc = reader.result;
        reader.readAsDataURL(file);
      }
}
