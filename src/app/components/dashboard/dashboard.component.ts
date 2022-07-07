import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RxjsService } from 'src/app/shared/services';
import { ModalUploadComponent } from '../modal-upload/modal-upload.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(public dialog: MatDialog,private rxjsServices: RxjsService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.rxjsServices.setGlobalLoaderProperty(true)
    }, 500);
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalUploadComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
