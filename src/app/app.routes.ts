import { Routes } from '@angular/router';
import { Home } from './componants/home/home';
import { Bookvr } from './componants/bookvr/bookvr';
import { Login } from './componants/login/login';
import { Signup } from './componants/signup/signup';
import { authGuard } from '../guards/auth-guard';

export const routes: Routes = [
  { path: 'home', component: Home },
  // { path: 'bookvr', component: Bookvr },
  {
    path:'bookvr',
    component:Bookvr,
    canActivate:[authGuard]
  },
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];
