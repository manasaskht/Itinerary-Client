import { Component, OnInit, ViewChild } from '@angular/core';
import { Utilities } from 'src/app/shared/utilities/utils.helper';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ItemDialogComponent } from './shared/components/item-dialog/item-dialog.component';
import { ItineraryService } from './shared/providers/itinerary.service';
import { flatMap } from 'rxjs/operators';
import { StorageHelper } from 'src/app/shared/utilities/storage.helper';
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
    itinerary: any;
    timeline: any;

    constructor(
        private router: Router,
        private dialog: MatDialog,
        private activatedRoute: ActivatedRoute,
        private itineraryService: ItineraryService
    ) {
        this.itinerary = { title: '', description: '' };
        this.timeline = {
            whole: [],
            top: [],
            bottom: []
        };
    }

    ngOnInit() {
        // this.itinerary = StorageHelper.getInstance().tempStore;
        this.activatedRoute.params.pipe(flatMap(params => {
            return this.itineraryService.listItineraries(params.id);
        }))
            .subscribe(itinerary => {
                this.itinerary = itinerary[0];
                this.refreshTimeline();
            });


        const startMapConfig = {
            center: new google.maps.LatLng(44.637515, -63.589746),
            zoom: 5,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        this.videoChats = [
            // {
            //     video: 'assets/imgs/profile_img.png',
            //     name: 'Self'
            // },
            // {
            //     video: 'assets/imgs/profile_img.png',
            //     name: 'Sohail'
            // },
            // {
            //     video: 'assets/imgs/profile_img.png',
            //     name: 'Kiran'
            // },
            // {
            //     video: 'assets/imgs/profile_img.png',
            //     name: 'Vandana'
            // }
        ];

        this.map = new google.maps.Map(this.gmaps.nativeElement, startMapConfig);
    }

    refreshTimeline() {
        this.itineraryService.listItineraryItems(this.itinerary.id)
            .subscribe((res: Array<any>) => {
                let topTimeline = [], bottomTimeline = [];
                for (let i = 0; i < res.length; i++) {
                    if (i % 2 === 0) {
                        topTimeline.push(res[i]);
                    } else {
                        bottomTimeline.push(res[i]);
                    }
                }
                Object.assign(this.timeline, {
                    whole: res,
                    top: topTimeline,
                    bottom: bottomTimeline
                });
            });
    }

    exit() {
        //Add dialog asking for confirmation.
        this.router.navigate(['/dashboard']);
    }

    addItems() {
        const dialogRef = this.dialog.open(ItemDialogComponent, {
            width: '40vw',
            data: { title: this.itinerary.title, id: this.itinerary.id }
        });
        dialogRef.afterClosed().subscribe(res => {
            this.refreshTimeline();
        });
    }

}
