import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ItemDialogComponent } from '../item-dialog/item-dialog.component';
import { FormGroup } from '@angular/forms';
import { WeatherService } from '../../providers/weather.service';
import { WeatherData } from './WeatherData';
@Component({
    selector: 'app-item-view-dialog',
    templateUrl: './item-view-dialog.component.html',
    styleUrls: ['./item-view-dialog.component.scss']
})
export class ItemViewDialogComponent implements OnInit {
    weatherList: WeatherData[];
    WeatherDesc: string;
    icon: string;
    temperature: number;
    minTemp: number;
    maxTemp: number;

    //Constructor call 
    constructor(private weatherService: WeatherService,
        public dialogRef: MatDialogRef<ItemDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {
        //console.log('data view', data);
    }
    getWeather(city: any) {
        //getWeather service call
        this.weatherService.getWeather(city).subscribe((data: any) => {
            this.weatherList = data.list;
            var itineraryDate = new Date(this.data.itineraryItem.dateTime);
            var itineraryDateStr = itineraryDate.toISOString().slice(0, 10)

            for (let wt of this.weatherList) {
                if (String(itineraryDateStr) === String(wt.dt_txt.split(" ", 1))) { //assign variables from the class objects
                    this.WeatherDesc = wt.weather[0].description;
                    //Preparing link for weather icons
                    this.icon = "http://openweathermap.org/img/w/" + wt.weather[0].icon + ".png";
                    this.temperature = wt.main.temp;
                    this.minTemp = wt.main.temp_min;
                    this.maxTemp = wt.main.temp_max;
                    return;
                }
                else { //This section executes only when the weather is not available for the selected date.
                    this.WeatherDesc = "Weather not available. Please check later.";
                    //Image reference: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCNcBiTV1lPPqJkKOAYOw_aLtSH4G7YcbF3doM15trp5t2jnu7
                    this.icon = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCNcBiTV1lPPqJkKOAYOw_aLtSH4G7YcbF3doM15trp5t2jnu7";
                }
            }
        });


    }

    ngOnInit() {
        //Call get weather function to fetch weather for the selected location for the itinerary.
        this.getWeather(this.data.itineraryItem.location);
    }

}
