import { Component, OnInit } from '@angular/core';
import { Utilities } from 'src/app/shared/utilities/utils.helper';

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


    constructor() {
        this.upcomingTrips = [{
            imgUrl: 'https://hmhps.ca/images/locations/citadel-hill/citadel-hill-1.jpg',
            itineraryName: 'Sister\'s Marrige Trip',
            places: ['Mauritius',]
        }];
        this.recomendedTrips = [
            {
                imgUrl: 'https://www.gannett-cdn.com/presto/2018/07/27/USAT/9c49add3-e5fa-4aaa-8af3-458fd0fa186f-italy-venice-gondolas-051018-az.jpg?crop=1799,1012,x0,y0&width=3200&height=1680&fit=bounds',
                place: 'Venice, Italy'
            },
            {
                imgUrl: 'https://www.strollingoftheheifers.com/wp-content/uploads/2012/12/Know-Your-Forester.jpg',
                place: 'Woodlands, Singapore'
            },
            {
                imgUrl: 'https://d39gusjpdm7p1o.cloudfront.net/data/layout_grouping/static_page_step/20784/a330628091ede7eb1548d6cda58e0357.jpg?ver=1477297804',
                place: 'Paris, France'
            },
            {
                imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ2VXfrz8eY0L31238Z5C3phG-e3EbQb_qm9ZsRwuUJZxFo4LwKA',
                place: 'Salvador, Brazil'
            }
        ];

        this.previousTrips = [
            {
                imgUrl: 'https://blockchaininvestio-c007.kxcdn.com/wp-content/uploads/2018/07/India-bitcoin.jpg',
                itineraryName: 'Trip to India with Aniruddha',
                places: ['Delhi', 'Agra', 'Chandigarh']
            },
            {
                imgUrl: 'http://www.traveller.com.au/content/dam/images/h/0/v/z/w/u/image.related.articleLeadwide.620x349.h166kx.png/1539216554259.jpg',
                itineraryName: 'Thailand on 2018 spring break',
                places: ['Maya Beach']
            },
            {
                imgUrl: 'https://hmhps.ca/images/locations/citadel-hill/citadel-hill-1.jpg',
                itineraryName: 'Brother\'s Marrige Trip',
                places: ['Halifax Citadel',]
            }
        ];
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

    ngOnInit() {
    }

}
