import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideCoreTokens } from '@v1/core/providers/core-providers';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideCoreTokens()]
};
