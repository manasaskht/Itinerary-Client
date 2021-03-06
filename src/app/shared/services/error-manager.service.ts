import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { StorageHelper } from '../utilities/storage.helper';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { serverUrls } from '../utilities/app.urls.helper';

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
                this.toastrService.error('Session time out.');
            }
            if (err.error['message'])
                this.toastrService.error(err.error.message);
        }
        return throwError(err);
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let serverUrl = serverUrls.getServerUrl();
        if (StorageHelper.getInstance().userInfo && req.url.indexOf(serverUrl) === 0) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${StorageHelper.getInstance().userInfo.token}`
                }
            });
        }
        return next.handle(req).pipe(map(res => {
            if (res instanceof HttpResponse && res.body.message && new URL(res.url).origin === serverUrl) {
                this.toastrService.success(res.body.message);
            }
            return res;
        }), catchError(this.errorHandler.bind(this)));
    }



}
