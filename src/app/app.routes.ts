import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import {  AboutComponent } from './pages/about/about';
import { ActivitiesComponent } from './pages/activities/activities';
import { CommitteeComponent } from './pages/committee/committee';
import { CultureComponent } from './pages/culture/culture';
import { Donation } from './pages/donation/donation';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'home' } },
  { path: 'about', component: AboutComponent, data: { animation: 'about' } },
  { path: 'activities', component: ActivitiesComponent, data: { animation: 'activities' } },
  { path: 'committee', component: CommitteeComponent, data: { animation: 'committee' } },
  { path: 'culture', component: CultureComponent },
  { path: 'donation', component: Donation },
];
