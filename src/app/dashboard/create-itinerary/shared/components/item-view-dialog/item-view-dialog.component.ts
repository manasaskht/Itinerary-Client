import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ItemDialogComponent } from '../item-dialog/item-dialog.component';

@Component({
    selector: 'app-item-view-dialog',
    templateUrl: './item-view-dialog.component.html',
    styleUrls: ['./item-view-dialog.component.scss']
})
export class ItemViewDialogComponent implements OnInit {

    constructor(
        public dialogRef: MatDialogRef<ItemDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {
        console.log('data view', data);
    }

    ngOnInit() {
    }

}
