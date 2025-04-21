import { Routes } from '@angular/router';
import {MainComponent} from './core/components/main/main.component';
import {NotFoundComponent} from './core/components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Boda!',
    component: MainComponent,
  },
  {
    path: '**',
    title: '404',
    component: NotFoundComponent,
  }
];
