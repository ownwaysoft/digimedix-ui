import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalUploadComponent } from './modal-upload.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';



@NgModule({
  declarations: [ModalUploadComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[ModalUploadComponent],
  entryComponents:[ModalUploadComponent]
})
export class ModalUploadModule { }
