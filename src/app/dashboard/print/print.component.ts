import { Component, OnInit } from '@angular/core';
import { ItineraryService } from '../create-itinerary/shared/providers/itinerary.service';
import { ActivatedRoute, Router } from '@angular/router';
import { flatMap } from 'rxjs/operators';
import { NotesService } from '../create-itinerary/notes.service';

@Component({
    selector: 'app-print',
    templateUrl: './print.component.html',
    styleUrls: ['./print.component.scss']
})
export class PrintComponent implements OnInit {
    itineraryItems: Array<any>;
    notes: Array<any>;

    constructor(
        private activatedRoute: ActivatedRoute,
        private itineraryService: ItineraryService,
        private noteService: NotesService,
        private router: Router
    ) {
    }
    print() {
        window.print();
    }

    back() {
        this.activatedRoute.params.subscribe(params => {
            console.log('route params', params);
            this.router.navigate(["/dashboard/create/" + params.id]);
        });

        // .pipe(flatMap(params => {
        //     return this.itineraryService.listItineraryItems(params.id);
        // }))
    }

    ngOnInit() {
        this.activatedRoute.params.pipe(flatMap(params => {
            return this.itineraryService.listItineraryItems(params.id);
        })).subscribe((res: any[]) => {
            this.itineraryItems = res;
            console.log(res);
        })

        this.activatedRoute.params.pipe(flatMap(params => {
            return this.noteService.getNotes(params.id);
        })).subscribe((res: any) => {
            this.notes = res;
            console.log(res);
        })
    }

}
