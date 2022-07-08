import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { ModulesBasedApiSuffix } from 'src/app/shared/enums';
import { CrudService, RxjsService } from 'src/app/shared/services';
import { IApplicationResponse } from 'src/app/shared/utils';
import { ModalUploadComponent } from '../../modal-upload/modal-upload.component';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent implements OnInit {

  @ViewChild(MatMenuTrigger, { static: true }) menuTrigger: any;
  constructor(public dialog: MatDialog, private rxjsServices: RxjsService, private crudService: CrudService) { }

  ngOnInit(): void {
    this.getDashboardData()
  }

  onRightClick(event: any) {
    this.menuTrigger.openMenu()
    return false;
  }

  getDashboardData() {
    this.crudService.get(ModulesBasedApiSuffix.GET_DASHBOARD)
      .subscribe((response: IApplicationResponse) => {
        if (response.status == 1) {
        }
      }, error => {
      });
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalUploadComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
