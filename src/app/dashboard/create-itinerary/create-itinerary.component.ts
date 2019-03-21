import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Utilities } from 'src/app/shared/utilities/utils.helper';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatButton } from '@angular/material';
import { ItemDialogComponent } from './shared/components/item-dialog/item-dialog.component';
import { ItineraryService } from './shared/providers/itinerary.service';
import { flatMap } from 'rxjs/operators';
import { ItemViewDialogComponent } from './shared/components/item-view-dialog/item-view-dialog.component';
declare let google: any;

@Component({
    selector: 'app-create-itinerary',
    templateUrl: './create-itinerary.component.html',
    styleUrls: ['./create-itinerary.component.scss']
})
export class CreateItineraryComponent implements OnInit {
    @ViewChild('gmaps') gmaps: any;
    @ViewChild('addItem') addItem: MatButton;

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
    }

    setupMap() {
        let halifax = new google.maps.LatLng(44.637515, -63.589746);
        let center = this.timeline.whole[0] ? JSON.parse(this.timeline.whole[0].locationLatLng) : halifax;
        const startMapConfig = {
            center: center,
            zoom: 5,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.gmaps.nativeElement, startMapConfig);
        for (let idx = 0; idx < this.timeline.whole.length; idx++) {
            let item = this.timeline.whole[idx];
            let marker = new google.maps.Marker({
                position: JSON.parse(item.locationLatLng),
                label: idx + 1 + '',
                map: this.map
            });
            marker.addListener('click', function (component: CreateItineraryComponent) {
                return function () {
                    let idx = this.label - 1;
                    component.viewItem(null, component.timeline.whole[idx]);
                }
            }(this));
        }
        let pointCoordinates = this.timeline.whole.map(d => JSON.parse(d.locationLatLng));
        let path = new google.maps.Polyline({
            path: pointCoordinates,
            geodesic: true,
            strokeColor: '#FF0000',
            strokeOpacity: 1.0,
            strokeWeight: 2
        });
        path.setMap(this.map);
    }

    showTimelineItemAdd(event) {
        this.addItem._elementRef.nativeElement.style.left = (event.clientX - 50) + 'px';
    }

    viewItem(event: MouseEvent, item: any) {
        event ? event.stopPropagation() : null;
        const dialogRef = this.dialog.open(ItemViewDialogComponent, {
            width: '40vw',
            data: { itineraryItem: item }
        });
        dialogRef.afterClosed().subscribe(res => {
            if (res.edit) {
                this.editTimeline(null, item);
            }
        });
    }

    refreshTimeline() {
        this.itineraryService.listItineraryItems(this.itinerary.id)
            .subscribe((res: Array<any>) => {
                let topTimeline = [], bottomTimeline = [];
                for (let i = 0; i < res.length; i++) {
                    res[i].dateTime = new Date(res[i].dateTime);
                    res[i].categoryIcon = Utilities.categories.find(d => d.item === res[i].category).icon;
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
                this.setupMap();
            });
    }

    deleteTimeline(event: MouseEvent, item: any) {
        event ? event.stopPropagation() : null;
        this.itineraryService.deleteItineraryItem(this.itinerary.id, item.id).subscribe(res => {
            this.refreshTimeline();
        });
    }

    editTimeline(event: MouseEvent, item: any) {
        event ? event.stopPropagation() : null;
        const dialogRef = this.dialog.open(ItemDialogComponent, {
            width: '40vw',
            data: { title: this.itinerary.title, id: this.itinerary.id, itineraryItem: item }
        });
        dialogRef.afterClosed().subscribe(res => {
            this.refreshTimeline();
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
