import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalCreateFolderComponent } from './modal-create-folder.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ModalCreateFolderComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [ModalCreateFolderComponent],
  entryComponents: [ModalCreateFolderComponent]
})
export class ModalCreateFolderModule { }
