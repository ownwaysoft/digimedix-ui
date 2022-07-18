import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalCreateFolderComponent } from 'src/app/components/modal-create-folder/modal-create-folder.component';
import { ModalUploadComponent } from 'src/app/components/modal-upload/modal-upload.component';

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

}
