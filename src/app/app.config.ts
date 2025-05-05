import { ApplicationConfig, provideZoneChangeDetection, inject } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {providePrimeNG} from 'primeng/config';

import Aura from '@primeng/themes/aura'
import {provideHttpClient} from '@angular/common/http';
import {provideApollo} from 'apollo-angular';
import {InMemoryCache} from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          prefix: 'p',
          darkModeSelector: 'none'
        }
      }
    }),
    provideHttpClient(),
    provideApollo(()=> {
      const httpLink = inject(HttpLink);
      return {
        link: httpLink.create({uri: 'https://boda-service.onrender.com/graphql'}),
        cache: new InMemoryCache()
      }
      })
  ]
};

