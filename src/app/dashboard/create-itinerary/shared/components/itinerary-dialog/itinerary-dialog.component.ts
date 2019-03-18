import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ItineraryService } from '../../providers/itinerary.service';
import { Router } from '@angular/router';
import { StorageHelper } from 'src/app/shared/utilities/storage.helper';

@Component({
    selector: 'app-itinerary-dialog',
    templateUrl: './itinerary-dialog.component.html',
    styleUrls: ['./itinerary-dialog.component.scss']
})
export class ItineraryDialogComponent implements OnInit {
    createItineraryForm: FormGroup;

    constructor(
        public dialogRef: MatDialogRef<ItineraryDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private itineraryService: ItineraryService,
        private router: Router
    ) {
        this.createItineraryForm = new FormGroup({
            title: new FormControl('', Validators.required),
            description: new FormControl('', Validators.required)
        });
    }

    ngOnInit() {
    }

    addItinerary() {
        if (this.createItineraryForm.invalid) {
            return;
        }

        let itemValues = this.createItineraryForm.value;

        this.itineraryService.addItinerary(itemValues.title, itemValues.description).subscribe((res: any) => {
            StorageHelper.getInstance().tempStore = res;
            this.router.navigate(['/dashboard/create/' + res.itinerary.id]);
            this.dialogRef.close();
        });
    }

}
