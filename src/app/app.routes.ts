import { Routes } from '@angular/router';
import {MainComponent} from './core/components/main/main.component';
import {NotFoundComponent} from './core/components/not-found/not-found.component';
import {InviteRegisterComponent} from './modules/invite-register/invite-register.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Boda de Coli y Fer!',
    component: MainComponent,
  },
  {
    path: 'registro',
    title: 'Registro de Invitados',
    component: InviteRegisterComponent,
  },
  {
    path: '**',
    title: '404',
    component: NotFoundComponent,
  }
];
