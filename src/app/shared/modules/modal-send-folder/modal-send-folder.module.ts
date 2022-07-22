import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalSendFolderComponent } from './modal-send-folder.component';
import { CommonShareModule } from 'src/app/modules/common-share/common-share.module';
import { MaterialModule } from '../material.module';



@NgModule({
  declarations: [
    ModalSendFolderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CommonShareModule
  ]
})
export class ModalSendFolderModule { }
