import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./to-do/to-do.module').then((m) => m.ToDoModule),
  },
];
