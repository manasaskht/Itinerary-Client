import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { LoginGuard } from '../shared/guards/login.guard';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            { path: '', loadChildren: './home/home.module#HomeModule' },
            { path: 'user', loadChildren: './profile/profile.module#ProfileModule' },
            { path: 'create', loadChildren: './create-itinerary/create-itinerary.module#CreateItineraryModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
