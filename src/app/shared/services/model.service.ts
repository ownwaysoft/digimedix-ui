import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FolderActionType } from '../enums';
import { ModalArchiveFolderComponent } from '../modules/modal-archive-folder/modal-archive-folder.component';
import { ModalCreateFolderComponent } from '../modules/modal-create-folder/modal-create-folder.component';
import { ModalDeleteFolderComponent } from '../modules/modal-delete-folder/modal-delete-folder.component';
import { ModalInfoFolderComponent } from '../modules/modal-info-folder/modal-info-folder.component';
import { ModalMoveFolderComponent } from '../modules/modal-move-folder/modal-move-folder.component';
import { ModalSendFolderComponent } from '../modules/modal-send-folder/modal-send-folder.component';
import { ModalShareFolderComponent } from '../modules/modal-share-folder/modal-share-folder.component';
import { ModalUploadComponent } from '../modules/modal-upload/modal-upload.component';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor(public dialog: MatDialog) { }

  openUploadDialog() {
    const dialogRef = this.dialog.open(ModalUploadComponent, {
      width: '40%'
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openCreateFolderDialog() {
    const dialogRef = this.dialog.open(ModalCreateFolderComponent, {
      width: '30%'
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      // this.getDashboardData()
    });
  }

  openDeleteFolderDialog() {
    const dialogRef = this.dialog.open(ModalDeleteFolderComponent, {
      width: '20%'
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      // this.getDashboardData()
    });
  }

  openInfoFolderDialog(data: any) {
    const dialogRef = this.dialog.open(ModalInfoFolderComponent, {
      data: data,
      width: '40%'
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      // this.getDashboardData()
    });
  }

  openArchiveFolderDialog(data: any) {
    const dialogRef = this.dialog.open(ModalArchiveFolderComponent, {
      data: data,
      width: '30%'
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      // this.getDashboardData()
    });
  }

  openMoveFolderDialog(data: any, actionType?: FolderActionType | any) {
    let type = {
      actionName: actionType
    }
    let datas = { ...type, data }
    const dialogRef = this.dialog.open(ModalMoveFolderComponent, {
      data: datas,
      width: '50%'
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      // this.getDashboardData()
    });
  }

  openSendFolderDialog(data: any) {
    const dialogRef = this.dialog.open(ModalSendFolderComponent, {
      data: data,
      width: '40%'
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      // this.getDashboardData()
    });
  }

  openShareFolderDialog(data: any) {
    const dialogRef = this.dialog.open(ModalShareFolderComponent, {
      data: data,
      width: '80%',
      // height: '80%'
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      // this.getDashboardData()
    });
  }

}
