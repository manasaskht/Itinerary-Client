import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { StorageHelper } from '../../utilities/storage.helper';

@Component({
    selector: 'app-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
    @Output() actionDone: EventEmitter<boolean>;

    constructor(
        private router: Router
    ) {
        this.actionDone = new EventEmitter<boolean>();
    }

    ngOnInit() {
    }

    logOut() {
        this.router.navigate(['/']);
        StorageHelper.getInstance().clear();
        this.actionDone.next(true);
    }

}
