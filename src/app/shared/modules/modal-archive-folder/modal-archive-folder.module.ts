import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalArchiveFolderComponent } from './modal-archive-folder.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    ModalArchiveFolderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [ModalArchiveFolderComponent],
  entryComponents: [ModalArchiveFolderComponent]
})
export class ModalArchiveFolderModule { }
