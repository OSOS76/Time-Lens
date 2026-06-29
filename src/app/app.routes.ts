import { Routes } from '@angular/router';
import { authGuard } from '../guards/auth-guard';

export const routes: Routes = [

{
path:'home',

loadComponent:()=>
import('./componants/home/home')
.then(m=>m.Home)

},

{
path:'bookvr',

loadComponent:()=>
import('./componants/bookvr/bookvr')
.then(m=>m.Bookvr),

canActivate:[authGuard]

},

{
path:'login',

loadComponent:()=>
import('./componants/login/login')
.then(m=>m.Login)

},

{
path:'signup',

loadComponent:()=>
import('./componants/signup/signup')
.then(m=>m.Signup)

},

{
path:'',
redirectTo:'home',
pathMatch:'full'
},

{
path:'**',
redirectTo:'home'
}

];
