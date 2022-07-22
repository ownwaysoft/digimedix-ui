import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalShareFolderComponent } from './modal-share-folder.component';
import { CommonShareModule } from 'src/app/modules/common-share/common-share.module';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    ModalShareFolderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CommonShareModule
  ]
})
export class ModalShareFolderModule { }
