import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { ShareComponent } from './share.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { CommonShareModule } from 'src/app/modules/common-share/common-share.module';


@NgModule({
  declarations: [
    ShareComponent
  ],
  imports: [
    CommonModule,
    ShareRoutingModule,
    MaterialModule,
    CommonShareModule
  ]
})
export class ShareModule { }
