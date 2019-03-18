import { GlobalConfig } from 'ngx-toastr';
// declare var google: any;

export namespace Utilities {

    export const emailPattern = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    // Used from
    // https://www.thepolyglotdeveloper.com/2015/05/use-regex-to-test-password-strength-in-javascript/
    export const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;

    // export const startMapConfig = {
    //     center: new google.maps.LatLng(18.5793, 73.8143),
    //     zoom: 15,
    //     mapTypeId: google.maps.MapTypeId.ROADMAP
    // };

    export const toastrConfig: Partial<GlobalConfig> = {
        timeOut: 2000,
        positionClass: 'toast-bottom-right',
        preventDuplicates: true,
        progressBar: true,
        progressAnimation: 'decreasing'
    };

    export function trimString(text: string, nchars: number) {
        if (text.length > nchars) {
            return text.substr(0, nchars - 3).trim() + '...';
        } else {
            return text;
        }
    }
}