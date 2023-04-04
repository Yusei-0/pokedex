import { Route } from '@angular/router';
import { MainComponent } from './main/';

export const ROUTES: Route[] = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'main',
    loadComponent: () => import('./main').then((page) => page.MainComponent),
  },
  {
    path: 'detail/:id',
    loadComponent: () =>
      import('./detail').then((page) => page.DetailComponent),
  },
];
