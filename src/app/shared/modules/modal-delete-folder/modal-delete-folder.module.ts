import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalDeleteFolderComponent } from './modal-delete-folder.component';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    ModalDeleteFolderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [ModalDeleteFolderComponent],
  entryComponents: [ModalDeleteFolderComponent]
})
export class ModalDeleteFolderModule { }
