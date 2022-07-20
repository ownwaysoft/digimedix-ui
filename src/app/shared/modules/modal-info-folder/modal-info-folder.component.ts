import { HttpParams } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModulesBasedApiSuffix, ResponseMessageTypes } from '../../enums';
import { CrudService, RxjsService, SessionService, SnackbarService } from '../../services';
import { IApplicationResponse, prepareGetRequestHttpParams } from '../../utils';

@Component({
  selector: 'app-modal-info-folder',
  templateUrl: './modal-info-folder.component.html',
  styleUrls: ['./modal-info-folder.component.scss']
})
export class ModalInfoFolderComponent implements OnInit {
  folderName: any
  loading: boolean = false
  folderInfo: any
  constructor(private rxjsService: RxjsService, private crudService: CrudService, private snackbarService: SnackbarService,
    private sessionService: SessionService, private dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }

  ngOnInit(): void {
    this.folderName = this.sessionService.getItem('currentFolderName')
    this.getInfo()
  }

  getInfo() {
    this.loading = true;
    let otherParams: any = {
      'filePath': this.data ? this.data?.Key : this.folderName,
    }
    if (this.folderName) {
      // otherParams['fileName'] = this.folderName
    }
    this.crudService.get(ModulesBasedApiSuffix.FOLDER_INFO, null, prepareGetRequestHttpParams('0', '0', otherParams))
      .subscribe((response: IApplicationResponse) => {
        this.loading = false;
        if (response) {
          this.folderInfo = response
          // this.snackbarService.openSnackbar('Folder Deleted Successfully!', ResponseMessageTypes.SUCCESS)

        } else {
          // this.snackbarService.openSnackbar(response.msg, ResponseMessageTypes.WARNING)
        }
      }, (error: any) => {
        this.loading = false;
        this.snackbarService.openSnackbar(error.error.message, ResponseMessageTypes.WARNING)
      });
  }


}
