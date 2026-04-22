import { Routes } from '@angular/router';
import { Figuras } from './figuras/figuras';
import { Login } from './login/login';
import { Principal } from './principal/principal';


export const routes: Routes = [

    { path: '', component: Login },
    { path: 'figuras', component: Figuras },
    { path: 'principal', component: Principal },

];
