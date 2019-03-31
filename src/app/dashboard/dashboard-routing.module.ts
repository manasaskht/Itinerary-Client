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
            { path: 'create/:id', loadChildren: './create-itinerary/create-itinerary.module#CreateItineraryModule' },
            { path: 'print/:id', loadChildren: './print/print.module#PrintModule' },
            { path: 'user-feedback', loadChildren: './user-feedback/user-feedback.module#UserFeedbackModule' },
            { path: '**', redirectTo: '' }
        ]
    },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
