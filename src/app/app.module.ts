import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginGuard } from './shared/guards/login.guard';
import { LogoutGuard } from './shared/guards/logout.guard';
import { ToastrModule } from 'ngx-toastr';
import { Utilities } from './shared/utilities/utils.helper';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
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
    providers: [LoginGuard, LogoutGuard],
    bootstrap: [AppComponent]
})
export class AppModule { }
