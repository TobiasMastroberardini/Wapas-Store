import { Routes } from '@angular/router';
import { PagueNotFoundComponent } from './pague-not-found/pague-not-found.component';
import { WapasComponent } from './wapas/wapas.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'clothes',
        pathMatch: 'full'
    },
    {
        path: 'clothes',
        component: WapasComponent
    },
    {
        path: '**',
        component: PagueNotFoundComponent
    }
];
