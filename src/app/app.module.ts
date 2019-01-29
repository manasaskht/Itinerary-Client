import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginGuard } from './shared/guards/login.guard';
import { LogoutGuard } from './shared/guards/logout.guard';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserAnimationsModule,
        AppRoutingModule
    ],
    providers: [LoginGuard, LogoutGuard],
    bootstrap: [AppComponent]
})
export class AppModule { }
