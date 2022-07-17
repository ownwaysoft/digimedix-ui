import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from 'src/app/shared/modules/material.module';
import { ModalCreateFolderModule } from '../modal-create-folder/modal-create-folder.module';
import { ModalUploadModule } from '../modal-upload/modal-upload.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DetailViewComponent } from './detail-view/detail-view.component';

@NgModule({
  declarations: [DashboardComponent, DetailViewComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    ModalUploadModule,
    ModalCreateFolderModule
  ],
})
export class DashboardModule {}
