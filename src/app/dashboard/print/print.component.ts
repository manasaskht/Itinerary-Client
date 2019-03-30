import { Component, OnInit } from '@angular/core';
import { ItineraryService } from '../create-itinerary/shared/providers/itinerary.service';
import { ActivatedRoute } from '@angular/router';
import { flatMap } from 'rxjs/operators';

@Component({
    selector: 'app-print',
    templateUrl: './print.component.html',
    styleUrls: ['./print.component.scss']
})
export class PrintComponent implements OnInit {
    itineraryItems: Array<any>;

    constructor(
        private activatedRoute: ActivatedRoute,
        private itineraryService: ItineraryService
    ) {
    }

    ngOnInit() {
        this.activatedRoute.params.pipe(flatMap(params => {
            return this.itineraryService.listItineraryItems(params.id);
        })).subscribe((res: any[]) => {
            this.itineraryItems = res;
            console.log(res);
        })
    }

}
