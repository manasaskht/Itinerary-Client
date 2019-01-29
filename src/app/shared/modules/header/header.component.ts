import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageHelper } from '../../utilities/storage.helper';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
    }

    logOut() {
        this.router.navigate(['/']);
        StorageHelper.getInstance().clear();
    }

}
