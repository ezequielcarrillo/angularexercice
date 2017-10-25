//import { LoginService } from './services/login.service';
import { Routes, CanActivate, Resolve  } from '@angular/router';
import { LoginComponent } from './components/login/login.component'
import { ProfilesComponent } from './components/profiles/profiles.component'
import { HomeComponent } from './components/home/home.component'
import { AuthGuardService } from './services/auth-guard.service'

export const appRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        data: { title: 'login to Caralibro' }
    },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: 'home',
        component: HomeComponent,
        data: { title: 'welcomehome' },
        canActivate:[AuthGuardService],
        
    },
    { path: 'home', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'profiles/:id',
        component: ProfilesComponent,
        data: { title: 'see profiles' },
        canActivate:[AuthGuardService]
    }
    
];
