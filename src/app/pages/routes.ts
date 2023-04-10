import { Route } from '@angular/router';

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
  {
    path: '**',
    redirectTo: 'main',
  },
];
