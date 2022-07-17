import { HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { ModulesBasedApiSuffix } from 'src/app/shared/enums';
import { CrudService, RxjsService, SessionService } from 'src/app/shared/services';
import { IApplicationResponse } from 'src/app/shared/utils';
import { ModalCreateFolderComponent } from '../modal-create-folder/modal-create-folder.component';
import { ModalUploadComponent } from '../modal-upload/modal-upload.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  @ViewChild(MatMenuTrigger, { static: true }) menuTrigger: any;
  dashBoardItems: any = []
  loading: boolean = false
  constructor(public dialog: MatDialog, private rxjsServices: RxjsService, private sessionService: SessionService, private crudService: CrudService) { }

  ngOnInit(): void {
    this.getDashboardData()
  }

  onRightClick(event: any) {
    this.menuTrigger.openMenu()
    return false;
  }

  getDashboardData() {
    this.loading = true;
    let userData = this.sessionService.getUserItem('userData')
    console.log(userData)
    let requestParams = new HttpParams().set('baseDirectory', '/' + userData?.directory_info?.baseDirectory + '/');
    this.crudService.get(ModulesBasedApiSuffix.GET_DASHBOARD, null, requestParams)
      .subscribe((response: IApplicationResponse) => {
        // if (response.status == 1) {
        // }
        this.loading = false;
        this.dashBoardItems = response
      }, error => {
        this.loading = false;
      });
  }

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
      this.getDashboardData()
    });
  }

}
