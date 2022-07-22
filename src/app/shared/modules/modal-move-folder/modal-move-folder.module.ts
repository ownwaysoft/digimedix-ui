import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalMoveFolderComponent } from './modal-move-folder.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TreeModule } from 'primeng/tree';


@NgModule({
  declarations: [
    ModalMoveFolderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TreeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [ModalMoveFolderComponent]

})
export class ModalMoveFolderModule { }
