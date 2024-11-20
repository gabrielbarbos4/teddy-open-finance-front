import { Routes } from "@angular/router";

export const APP_ROUTES: Routes = [
  {
    path: "auth",
    loadComponent: () => import('./core/auth/auth.component').then(cmp => cmp.AuthComponent)
  },
  {
    path: "**",
    redirectTo: "auth"
  }
]
