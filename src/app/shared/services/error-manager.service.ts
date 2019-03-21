import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { StorageHelper } from '../utilities/storage.helper';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class ErrorManagerService implements HttpInterceptor {

    constructor(
        private toastrService: ToastrService,
        private router: Router
    ) { }

    errorHandler(err: any) {
        console.log('Error Occured');
        if (err instanceof HttpErrorResponse) {
            if (err.status === 401) {
                console.log('unauthorized access')
            } else if (err.status === 403) {
                console.log('forbidden');
                this.router.navigate(['/']);
                StorageHelper.getInstance().clear();
            }
            if (err.error['message'])
                this.toastrService.error(err.error.message);
        }
        return throwError(err);
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (StorageHelper.getInstance().userInfo) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${StorageHelper.getInstance().userInfo.token}`
                }
            });
        }
        return next.handle(req).pipe(catchError(this.errorHandler.bind(this)));
    }


}
