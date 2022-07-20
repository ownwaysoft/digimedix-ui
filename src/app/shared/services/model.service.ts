import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalCreateFolderComponent } from '../modules/modal-create-folder/modal-create-folder.component';
import { ModalDeleteFolderComponent } from '../modules/modal-delete-folder/modal-delete-folder.component';
import { ModalInfoFolderComponent } from '../modules/modal-info-folder/modal-info-folder.component';
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
      width: '40%'
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

  openInfoFolderDialog(data:any) {
    const dialogRef = this.dialog.open(ModalInfoFolderComponent, { data:data,
      width: '40%'
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
      // this.getDashboardData()
    });
  }
}
