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
        this.itineraryService.listItineraries().subscribe((res: Array<any>) => {
            this.upcomingTrips = res;
        })
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
