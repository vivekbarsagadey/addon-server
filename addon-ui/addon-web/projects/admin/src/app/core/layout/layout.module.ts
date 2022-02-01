import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import {RouterModule} from "@angular/router";
import {TemplateBaseModule} from "addon_web/libs/web-ui/components";



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    TemplateBaseModule,
    RouterModule.forChild([
      {
        path: '',
        component: LayoutComponent,
        children: [
          {
            path: 'dashboard',
            loadChildren: () => import('../../modules/dashboard/dashboard.module').then(m => m.DashboardModule)
          },
          {
            path: 'users',
            loadChildren: () => import('addon_web/libs/web-ui/components').then(m => m.UsersModule)
          },
          {
            path: 'roles',
            loadChildren: () => import('addon_web/libs/web-ui/components').then(m => m.RolesModule)
          },
          {
            path: 'rules',
            loadChildren: () => import('addon_web/libs/web-ui/components').then(m => m.RulesModule)
          },
          {
            path: '',
            redirectTo: 'dashboard',
            pathMatch: 'full'
          }
        ]
      }
    ])
  ]
})
export class LayoutModule { }
