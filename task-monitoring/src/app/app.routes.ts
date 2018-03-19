import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserControlComponent } from './user-control/user-control.component';

// route configuration. login will be the default page

const routes : Routes = [
    {
        path: '',
        redirectTo: '/main',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'main',
        component: UserControlComponent,
    }
];

// make our routes available to the rest of the application
export const appRouterModule = RouterModule.forRoot(routes);