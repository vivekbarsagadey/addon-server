import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ErrorPopupComponent} from "addon_web/libs/web-ui/components/popups/error-popup/error-popup.component";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./core/layout/layout.module').then(m => m.LayoutModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('addon_web/libs/web-ui/components').then(m => m.AuthModule)
  },
  {
    path: '404',
    component: ErrorPopupComponent
  },
  {
    path: '500',
    component: ErrorPopupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
