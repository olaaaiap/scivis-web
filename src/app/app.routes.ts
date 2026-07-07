import { Routes } from '@angular/router';
import { Viewer } from './viewer/viewer';
import { Home } from './home/home';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'viewer',
    component: Viewer
  },
  {
    path: 'home',
    component: Home
  }
];
