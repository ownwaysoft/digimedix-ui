import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModulesBasedApiSuffix, ResponseMessageTypes } from 'src/app/shared/enums';
import { CrudService, RxjsService, SessionService, SnackbarService } from 'src/app/shared/services';
import { IApplicationResponse } from 'src/app/shared/utils';

@Component({
  selector: 'app-modal-create-folder',
  templateUrl: './modal-create-folder.component.html',
  styleUrls: ['./modal-create-folder.component.scss']
})
export class ModalCreateFolderComponent implements OnInit {
  loading: boolean = false
  createFolderForm: FormGroup
  constructor(private formBulder: FormBuilder,private rxjsService:RxjsService, private crudService: CrudService, private snackbarService: SnackbarService,
    private sessionService: SessionService, private router: Router, private dialogRef: MatDialogRef<any>) {
    this.createFolderForm = this.formBulder.group({
      folderName: ['', Validators.required],
      currentpath: ['', Validators.required],
    })
  }

  ngOnInit(): void { }

  onSubmit() {
    this.loading = true;
    let userData = this.sessionService.getUserItem('userData')
    this.createFolderForm.get('currentpath')?.setValue('/' + userData?.directory_info?.baseDirectory + '/')
    if (this.createFolderForm.invalid) {
      this.loading = false;
      return;
    }
    this.crudService.create(ModulesBasedApiSuffix.FOLDER_CREATE, this.createFolderForm.value)
      .subscribe((response: IApplicationResponse) => {
        this.loading = false;
        if (response) {
          this.snackbarService.openSnackbar('Folder Created Successfully!', ResponseMessageTypes.SUCCESS)
          this.rxjsService.setGlobalReloadProperty(true)
          this.dialogRef.close();
        } else {
          // this.snackbarService.openSnackbar(response.msg, ResponseMessageTypes.WARNING)
        }
      }, error => {
        this.loading = false;
        this.snackbarService.openSnackbar(error.error.message, ResponseMessageTypes.WARNING)
      });
  }

}
