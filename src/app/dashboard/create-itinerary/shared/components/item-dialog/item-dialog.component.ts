import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ItineraryService } from '../../providers/itinerary.service';
import { Observable } from 'rxjs';
import { Utilities } from 'src/app/shared/utilities/utils.helper';
import { _ } from 'underscore';
declare let google: any;

@Component({
    selector: 'app-item-dialog',
    templateUrl: './item-dialog.component.html',
    styleUrls: ['./item-dialog.component.scss']
})
export class ItemDialogComponent implements OnInit {
    today: Date;
    categories = [];

    createItemForm: FormGroup;
    isEdit: boolean;
    filteredOptions: Observable<Array<any>>;
    locationLatLng: string;

    @ViewChild('location') locationElement: ElementRef;

    constructor(
        public dialogRef: MatDialogRef<ItemDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private itineraryService: ItineraryService
    ) {
        this.isEdit = data['itineraryItem'] !== undefined;
        let currentItemData = this.isEdit ? data['itineraryItem'] : null;
        this.createItemForm = new FormGroup({
            title: new FormControl(this.isEdit ? currentItemData.title : '', Validators.required),
            description: new FormControl(this.isEdit ? currentItemData.description : '', Validators.required),
            dateTime: new FormControl(this.isEdit ? new Date(currentItemData.dateTime) : '', [Validators.required]),
            category: new FormControl(this.isEdit ? currentItemData.category : '', [Validators.required]),
            location: new FormControl(this.isEdit ? currentItemData.location : '', [Validators.required])
        });
        this.categories = Utilities.categories;
        // this.filteredOptions = this.createItemForm.controls.location.valueChanges
        //     .pipe(
        //         startWith(''),
        //         flatMap(value => this.placesService.getPlaces(value))
        //     );
    }

    ngOnInit() {
        this.today = new Date();
        let autoComplete = new google.maps.places.Autocomplete(this.locationElement.nativeElement);
        google.maps.event.addListener(autoComplete, 'place_changed', () => {
            let place = autoComplete.getPlace();
            let locationName = place.formatted_address;
            if (locationName.indexOf(place.name) === -1)
                locationName = place.name + ', ' + locationName;
            this.createItemForm.controls.location.setValue(locationName);
            console.log(autoComplete.getPlace());
            this.locationLatLng = JSON.stringify(place.geometry.location.toJSON());
        });
    }

    addItem() {
        if (this.createItemForm.invalid) {
            return;
        }

        let itemValues = this.createItemForm.value;

        this.itineraryService.addItineraryItem(
            this.data.id,
            itemValues.title,
            itemValues.description,
            itemValues.dateTime,
            itemValues.category,
            itemValues.location,
            itemValues.location ? this.locationLatLng : null
        )
            .subscribe(res => {
                this.dialogRef.close();
            });
    }

    editItem() {
        if (this.createItemForm.invalid) {
            return;
        }
        let itemValues = this.createItemForm.value;
        if (_.isEqual(this.data, itemValues)) {
            this.dialogRef.close();
            return;
        }

        this.itineraryService.editItineraryItem(
            this.data.itineraryItem.id,
            itemValues.title,
            itemValues.description,
            itemValues.dateTime,
            itemValues.category,
            itemValues.location,
            itemValues.location ? this.locationLatLng : null
        )
            .subscribe(res => {
                this.dialogRef.close();
            });
    }
}
