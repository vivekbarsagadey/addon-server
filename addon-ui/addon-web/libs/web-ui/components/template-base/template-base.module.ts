import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateBaseComponent } from './template-base.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import { MenuListItemComponent } from './menu-list-item/menu-list-item.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {MatMenuModule} from "@angular/material/menu";



@NgModule({
  declarations: [
    TemplateBaseComponent,
    MenuListItemComponent,
    UserProfileComponent
  ],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        MatTooltipModule,
        MatSidenavModule,
        MatListModule,
        MatMenuModule
    ],
  exports: [
    TemplateBaseComponent
  ]
})
export class TemplateBaseModule { }
