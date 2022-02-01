import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPopupComponent } from './error-popup/error-popup.component';



@NgModule({
  declarations: [
    ErrorPopupComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ErrorPopupComponent
  ]
})
export class PopupsModule { }
