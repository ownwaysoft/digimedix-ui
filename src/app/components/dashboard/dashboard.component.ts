import { HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { ActivatedRoute } from '@angular/router';
import { ModulesBasedApiSuffix } from 'src/app/shared/enums';
import { CrudService, RxjsService, SessionService } from 'src/app/shared/services';
import { ModelService } from 'src/app/shared/services/model.service';
import { IApplicationResponse } from 'src/app/shared/utils';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  @ViewChild(MatMenuTrigger, { static: true }) menuTrigger: any;
  dashBoardItems: any = []
  folderName: any
  selectedItems: any = []

  constructor(public dialog: MatDialog, private activatedRoute: ActivatedRoute, private rxjsServices: RxjsService, private sessionService: SessionService, private crudService: CrudService, public modelService: ModelService) {
    this.activatedRoute.queryParamMap.subscribe((params: any) => {
      this.folderName = params['params']['folderName'] ? params['params']['folderName'] : '';
      this.sessionService.setItem('currentFolderName', this.folderName)
      this.getDashboardData()
    })
    this.rxjsServices.getGlobalReloadProperty().subscribe(val => {
      if (val) {
        this.getDashboardData()
      }
    })
  }

  ngOnInit(): void {
    // this.getDashboardData()
  }

  onRightClick(event: any) {
    this.menuTrigger.openMenu()
    return false;
  }

  getDashboardData() {
    this.rxjsServices.setGlobalProgressBarProperty(true)
    let userData = this.sessionService.getUserItem('userData')
    let requestParams = new HttpParams().set('baseDirectory', '/' + userData?.directory_info?.baseDirectory + (this.folderName ? this.folderName : '/'));
    this.crudService.get(ModulesBasedApiSuffix.GET_DASHBOARD, null, requestParams)
      .subscribe((response: IApplicationResponse) => {
        this.rxjsServices.setGlobalProgressBarProperty(false)
        this.dashBoardItems = response
      }, error => {
        this.rxjsServices.setGlobalProgressBarProperty(false)
      });
  }

  onSelected(item: any, event: any) {
    item.checked = event.checked;
    this.getSelectedItems()
  }

  getSelectedItems(){
   let items = this.dashBoardItems.filter((x:any)=>x.checked == true)
   this.selectedItems = items
  }

  onSelecteAll(event:any){
   let items = this.dashBoardItems.filter((x:any)=>x.checked = event.checked)
   this.selectedItems = items
  }

}
