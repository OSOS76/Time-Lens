import { Routes } from '@angular/router';
import { Home } from './componants/home/home';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: '**', redirectTo: 'home' },
];
