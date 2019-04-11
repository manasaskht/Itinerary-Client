import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

    features = [];

    constructor() {
        this.features = [
            { image: 'assets/imgs/videochat.png', name: 'Real-time collaboration with friends' },
            { image: 'assets/imgs/map.PNG', name: 'Real-time map' },
            { image: 'assets/imgs/timeline.png', name: 'Interactive Timeline with multi user editing' },
        ];
    }

    ngOnInit() {
    }

}
