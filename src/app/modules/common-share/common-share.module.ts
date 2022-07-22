import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonShareComponent } from './common-share.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';



@NgModule({
  declarations: [
    CommonShareComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports:[CommonShareComponent]
})
export class CommonShareModule { }
