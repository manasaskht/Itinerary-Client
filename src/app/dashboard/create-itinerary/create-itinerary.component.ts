import { Component, OnInit, ViewChild } from '@angular/core';
import { Utilities } from 'src/app/shared/utilities/utils.helper';
declare let google: any;

@Component({
    selector: 'app-create-itinerary',
    templateUrl: './create-itinerary.component.html',
    styleUrls: ['./create-itinerary.component.scss']
})
export class CreateItineraryComponent implements OnInit {
    @ViewChild('gmaps') gmaps: any;
    map: google.maps.Map;

    videoChats = [];

    constructor() { }

    ngOnInit() {

        const startMapConfig = {
            center: new google.maps.LatLng(44.637515, -63.589746),
            zoom: 5,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        this.videoChats = [
            {
                video: 'assets/imgs/profile_img.png',
                name: 'Rahul'
            },
            {
                video: 'assets/imgs/profile_img.png',
                name: 'Sohail'
            },
            {
                video: 'assets/imgs/profile_img.png',
                name: 'Kiran'
            },
            {
                video: 'assets/imgs/profile_img.png',
                name: 'Vandana'
            }
        ];

        this.map = new google.maps.Map(this.gmaps.nativeElement, startMapConfig);
    }

}
