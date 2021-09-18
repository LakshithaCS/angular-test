import { Routes } from '@angular/router';

import { PhotosComponent } from '../photos/photos.component';
import { HomeComponent } from '../home/home.component';
import { StatsComponent } from '../stats/stats.component';
import { ContactComponent } from '../contact/contact.component';

export const routes: Routes = [

    { path: 'home', component: HomeComponent },
    { path: 'stats', component: StatsComponent },
    { path: 'photos', component: PhotosComponent },
    { path: 'contact', component: ContactComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }

];