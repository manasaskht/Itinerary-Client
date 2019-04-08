import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginGuard } from './shared/guards/login.guard';
import { LogoutGuard } from './shared/guards/logout.guard';
import { ToastrModule } from 'ngx-toastr';
import { Utilities } from './shared/utilities/utils.helper';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorManagerService } from './shared/services/error-manager.service';

import { FormsModule } from '@angular/forms';
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserAnimationsModule,
        AppRoutingModule,
        ToastrModule.forRoot(Utilities.toastrConfig),
        FormsModule,
        HttpClientModule
    ],
    providers: [
        LoginGuard,
        LogoutGuard, {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorManagerService,
            multi: true
        }],
    bootstrap: [AppComponent]
})
export class AppModule { }
