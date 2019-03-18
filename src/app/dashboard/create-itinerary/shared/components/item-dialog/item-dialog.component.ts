import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ItineraryService } from '../../providers/itinerary.service';

@Component({
    selector: 'app-item-dialog',
    templateUrl: './item-dialog.component.html',
    styleUrls: ['./item-dialog.component.scss']
})
export class ItemDialogComponent implements OnInit {

    createItemForm: FormGroup;

    constructor(
        public dialogRef: MatDialogRef<ItemDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private itineraryService: ItineraryService
    ) {
        this.createItemForm = new FormGroup({
            title: new FormControl('', Validators.required),
            description: new FormControl('', Validators.required)
        });
    }

    ngOnInit() {
    }

    addItem() {
        if (this.createItemForm.invalid) {
            return;
        }

        let itemValues = this.createItemForm.value;

        this.itineraryService.addItineraryItem(itemValues.title, itemValues.description, this.data.id).subscribe(res => {
            this.dialogRef.close();
        });
    }

}
