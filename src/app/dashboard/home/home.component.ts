import { Component, OnInit } from '@angular/core';
import { Utilities } from 'src/app/shared/utilities/utils.helper';
import { MatDialog } from '@angular/material';
import { ItineraryDialogComponent } from '../create-itinerary/shared/components/itinerary-dialog/itinerary-dialog.component';
import { ItineraryService } from '../create-itinerary/shared/providers/itinerary.service';
import { Router } from '@angular/router';
import { StorageHelper } from 'src/app/shared/utilities/storage.helper';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    recomendedTrips: Array<any>;
    previousTrips: Array<any>;
    upcomingTrips: Array<any>;
    trimString = Utilities.trimString;


    constructor(
        private dialog: MatDialog,
        private itineraryService: ItineraryService,
        private router: Router
    ) { }

    ngOnInit() {
        this.listItineraries();
    }

    getImage() {
        let urls = [
            'https://www.strollingoftheheifers.com/wp-content/uploads/2012/12/Know-Your-Forester.jpg',
            'https://hmhps.ca/images/locations/citadel-hill/citadel-hill-1.jpg',
            'https://www.gannett-cdn.com/presto/2018/07/27/USAT/9c49add3-e5fa-4aaa-8af3-458fd0fa186f-italy-venice-gondolas-051018-az.jpg?crop=1799,1012,x0,y0&width=3200&height=1680&fit=bounds',
            'https://d39gusjpdm7p1o.cloudfront.net/data/layout_grouping/static_page_step/20784/a330628091ede7eb1548d6cda58e0357.jpg?ver=1477297804',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ2VXfrz8eY0L31238Z5C3phG-e3EbQb_qm9ZsRwuUJZxFo4LwKA',
            'https://blockchaininvestio-c007.kxcdn.com/wp-content/uploads/2018/07/India-bitcoin.jpg',
            'http://www.traveller.com.au/content/dam/images/h/0/v/z/w/u/image.related.articleLeadwide.620x349.h166kx.png/1539216554259.jpg',
            'https://hmhps.ca/images/locations/citadel-hill/citadel-hill-1.jpg',
        ];
        return urls[Math.floor(Math.random() * urls.length)];
    }

    listItineraries() {
        this.itineraryService.listItineraries().subscribe((res: Array<any>) => {
            this.upcomingTrips = res;
        });
    }

    getPlaces(places: Array<string>) {
        let charsVisible = 20;
        if (places && places.length > 0) {
            let joinedStr = places.join(', ');
            return Utilities.trimString(joinedStr, charsVisible);
        } else {
            return 'None';
        }
    }

    selectedTrip(trip: any) {
        this.router.navigate(['dashboard/create/' + trip.id]);
        StorageHelper.getInstance().tempStore = trip;
    }



    newItinerary() {
        const dialogRef = this.dialog.open(ItineraryDialogComponent, {
            width: '40vw',
            data: {}
        });

        dialogRef.afterClosed().subscribe(result => {
        });
    }

}
