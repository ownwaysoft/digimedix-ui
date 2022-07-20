import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { RemoveSlashPipe } from 'src/app/shared/pipes/remove-slash.pipe';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [DashboardComponent, RemoveSlashPipe],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
  ],
})
export class DashboardModule {}
