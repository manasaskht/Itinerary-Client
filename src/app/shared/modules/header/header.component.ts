import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { StorageHelper } from '../../utilities/storage.helper';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    @Output() menuClicked: EventEmitter<boolean>;

    constructor(private router: Router) {
        this.menuClicked = new EventEmitter<boolean>();
    }

    ngOnInit() {
    }

    logOut() {
        this.router.navigate(['/']);
        StorageHelper.getInstance().clear();
    }

}
