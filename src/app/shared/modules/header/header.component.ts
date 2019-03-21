import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { StorageHelper } from '../../utilities/storage.helper';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    firstName: string;

    @Output() menuClicked: EventEmitter<boolean>;

    constructor(private router: Router) {
        this.menuClicked = new EventEmitter<boolean>();
        this.firstName = StorageHelper.getInstance().userInfo.firstName;
    }

    ngOnInit() {
    }

    logOut() {
        this.router.navigate(['/']);
        StorageHelper.getInstance().clear();
    }

}
