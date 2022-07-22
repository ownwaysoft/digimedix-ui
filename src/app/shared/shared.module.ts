import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModalArchiveFolderModule } from './modules/modal-archive-folder/modal-archive-folder.module';
import { ModalCreateFolderModule } from './modules/modal-create-folder/modal-create-folder.module';
import { ModalDeleteFolderModule } from './modules/modal-delete-folder/modal-delete-folder.module';
import { ModalInfoFolderModule } from './modules/modal-info-folder/modal-info-folder.module';
import { ModalMoveFolderModule } from './modules/modal-move-folder/modal-move-folder.module';
import { ModalSendFolderModule } from './modules/modal-send-folder/modal-send-folder.module';
import { ModalShareFolderModule } from './modules/modal-share-folder/modal-share-folder.module';
import { ModalUploadModule } from './modules/modal-upload/modal-upload.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ModalArchiveFolderModule,
    ModalDeleteFolderModule,
    ModalUploadModule,
    ModalInfoFolderModule,
    ModalCreateFolderModule,
    ModalMoveFolderModule,
    ModalSendFolderModule,
    ModalShareFolderModule
  ]
})
export class SharedModule { }
