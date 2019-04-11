//Weather class for taking Weather Json data of OpenWeatherMap API
import { CloudsData } from './CloudsData';
import {mainWeatherData} from './mainWeatherData';

export class WeatherData {
    dt: string;
    main: mainWeatherData;
    weather: CloudsData;
    clouds: any;
    wind: any;
    sys: any;
    dt_txt: string;

}