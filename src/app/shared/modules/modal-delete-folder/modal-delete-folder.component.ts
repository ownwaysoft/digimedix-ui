import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ModulesBasedApiSuffix, ResponseMessageTypes } from '../../enums';
import { CrudService, RxjsService, SessionService, SnackbarService } from '../../services';
import { IApplicationResponse } from '../../utils';

@Component({
  selector: 'app-modal-delete-folder',
  templateUrl: './modal-delete-folder.component.html',
  styleUrls: ['./modal-delete-folder.component.scss']
})
export class ModalDeleteFolderComponent implements OnInit {
  folderName: any
  loading: boolean = false
  constructor(private rxjsService: RxjsService, private crudService: CrudService, private snackbarService: SnackbarService,
    private sessionService: SessionService, private dialogRef: MatDialogRef<any>) {

  }

  ngOnInit(): void {
    this.folderName = this.sessionService.getItem('currentFolderName')
  }
  onSubmit() {
    this.loading = true;
    let data = {
      deleteFilePath: this.folderName
    }
    this.crudService.create(ModulesBasedApiSuffix.FOLDER_DELETE, data)
      .subscribe((response: IApplicationResponse) => {
        this.loading = false;
        if (response) {
          this.snackbarService.openSnackbar('Folder Deleted Successfully!', ResponseMessageTypes.SUCCESS)
          this.rxjsService.setGlobalReloadProperty(true)
          this.dialogRef.close();
        } else {
          // this.snackbarService.openSnackbar(response.msg, ResponseMessageTypes.WARNING)
        }
      }, (error: any) => {
        this.loading = false;
        this.snackbarService.openSnackbar(error.error.message, ResponseMessageTypes.WARNING)
      });
  }


}
