import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationRoutingModule } from './notification-routing.module';
import { NotificationComponent } from './notification.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';


@NgModule({
  declarations: [
    NotificationComponent
  ],
  imports: [
    CommonModule,
    NotificationRoutingModule,
    MaterialModule
  ]
})
export class NotificationModule { }
