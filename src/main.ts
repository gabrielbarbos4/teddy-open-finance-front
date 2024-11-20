import { ApplicationConfig, bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { provideRouter } from "@angular/router";
import { APP_ROUTES } from "./app/app.routes";
import { provideZoneChangeDetection } from "@angular/core";

export const APP_CONFIG: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(APP_ROUTES)
  ]
};

bootstrapApplication(AppComponent, APP_CONFIG).catch(e => console.error(e))
