import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModulesBasedApiSuffix, ResponseMessageTypes } from 'src/app/shared/enums';
import { CrudService, RxjsService, SessionService, SnackbarService } from 'src/app/shared/services';
import { IApplicationResponse } from 'src/app/shared/utils';
import { TreeNode } from 'primeng/api';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-modal-move-folder',
  templateUrl: './modal-move-folder.component.html',
  styleUrls: ['./modal-move-folder.component.scss']
})
export class ModalMoveFolderComponent implements OnInit {

  items: TreeNode[] = []
  selectedItem!: TreeNode;
  loading: boolean = false
  createFolderForm: FormGroup
  folderName:any
  actionName:any
  constructor(private formBulder: FormBuilder, private rxjsServices: RxjsService, private rxjsService: RxjsService, private crudService: CrudService, private snackbarService: SnackbarService,
    private sessionService: SessionService, private router: Router, private dialogRef: MatDialogRef<any>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.createFolderForm = this.formBulder.group({
      folderName: ['', Validators.required],
      currentpath: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    console.log(this.data)
    this.folderName = this.data ? this.data?.data?.Key : this.sessionService.getItem('currentFolderName'),
    this.actionName = this.data ? this.data?.actionName : 'Move',
    this.getDashboardData()
    this.items = [
      // {
      //   "label": "Documents",
      //   "data": "Documents Folder",
      //   "expandedIcon": "pi pi-folder-open",
      //   "collapsedIcon": "pi pi-folder",
      //   "children": [{
      //     "label": "Work",
      //     "data": "Work Folder",
      //     "expandedIcon": "pi pi-folder-open",
      //     "collapsedIcon": "pi pi-folder",
      //     "children": [{ "label": "Expenses.doc", "icon": "pi pi-file", "data": "Expenses Document" }, { "label": "Resume.doc", "icon": "pi pi-file", "data": "Resume Document" }]
      //   },
      //   {
      //     "label": "Home",
      //     "data": "Home Folder",
      //     "expandedIcon": "pi pi-folder-open",
      //     "collapsedIcon": "pi pi-folder",
      //     "children": [{ "label": "Invoices.txt", "icon": "pi pi-file", "data": "Invoices for this month" }]
      //   }]
      // },
      // {
      //   "label": "Pictures",
      //   "data": "Pictures Folder",
      //   "expandedIcon": "pi pi-folder-open",
      //   "collapsedIcon": "pi pi-folder",
      //   "children": [
      //     { "label": "barcelona.jpg", "icon": "pi pi-image", "data": "Barcelona Photo" },
      //     { "label": "logo.jpg", "icon": "pi pi-file", "data": "PrimeFaces Logo" },
      //     { "label": "primeui.png", "icon": "pi pi-image", "data": "PrimeUI Logo" }]
      // },
      // {
      //   "label": "Movies",
      //   "data": "Movies Folder",
      //   "expandedIcon": "pi pi-folder-open",
      //   "collapsedIcon": "pi pi-folder",
      //   "children": [{
      //     "label": "Al Pacino",
      //     "data": "Pacino Movies",
      //     "children": [{ "label": "Scarface", "icon": "pi pi-video", "data": "Scarface Movie" }, { "label": "Serpico", "icon": "pi pi-file-video", "data": "Serpico Movie" }]
      //   },
      //   {
      //     "label": "Robert De Niro",
      //     "data": "De Niro Movies",
      //     "children": [{ "label": "Goodfellas", "icon": "pi pi-video", "data": "Goodfellas Movie" }, { "label": "Untouchables", "icon": "pi pi-video", "data": "Untouchables Movie" }]
      //   }]
      // }
    ]
  }

  getDashboardData() {
    this.loading = true
    let userData = this.sessionService.getUserItem('userData')
    let requestParams = new HttpParams().set('baseDirectory', '/' + userData?.directory_info?.baseDirectory + '/');
    this.crudService.get(ModulesBasedApiSuffix.GET_DASHBOARD, null, requestParams)
      .subscribe((response: any) => {
        this.loading = false
        response.forEach((element: any) => {
          element.label = element.Key,
            element.data = element.Key,
            element.expandedIcon = "pi pi-folder-open",
            element.collapsedIcon = "pi pi-folder"
          element.children = []
        })
        this.items = response
        console.log(this.items)
      }, error => {
        this.loading = false
      });
  }

  onNodeSelect(event:any){
    console.log(event)
    debugger
    this.createFolderForm.get('folderName')?.setValue(event?.node?.label)
  }

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
          this.snackbarService.openSnackbar('Folder Moved Successfully!', ResponseMessageTypes.SUCCESS)
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

