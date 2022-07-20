import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalInfoFolderComponent } from './modal-info-folder.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    ModalInfoFolderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [ModalInfoFolderComponent],
  entryComponents: [ModalInfoFolderComponent]
})
export class ModalInfoFolderModule { }
