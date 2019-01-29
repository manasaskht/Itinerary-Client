import { Injectable } from '@angular/core';
import { CanLoad, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageHelper } from '../utilities/storage.helper';
import { Route } from '@angular/compiler/src/core';

@Injectable({
    providedIn: 'root'
})
export class LoginGuard implements CanLoad {
    constructor(private router: Router) {

    }

    canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
        if (StorageHelper.getInstance().userInfo)
            return true;
        else {
            this.router.navigate(['/']);
            return false;
        }
    }
}
