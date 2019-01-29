import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './shared/guards/login.guard';
import { LogoutGuard } from './shared/guards/logout.guard';

const routes: Routes = [
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: 'landing', loadChildren: './landing-page/landing-page.module#LandingPageModule', canLoad: [LogoutGuard] },
    { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', canLoad: [LoginGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
