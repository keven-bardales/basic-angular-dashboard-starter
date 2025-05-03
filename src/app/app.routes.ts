import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'v1',
                loadChildren: () => import('@v1/version-1.routes').then(m => m.default)
            }
        ]
    }
];
