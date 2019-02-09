import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    // private drawer: MatSidenav;

    @ViewChildren('matdrawer') drawers: QueryList<MatSidenav>;

    constructor() {
    }

    ngOnInit() {
    }

    get isScreenSmall() {
        return window.screen.width < 599;
    }

    toggleMenu() {
        this.drawers.first.toggle();
    }

}
