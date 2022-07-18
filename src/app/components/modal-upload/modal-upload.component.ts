import { Component, OnInit } from '@angular/core';
import { ModelService } from 'src/app/shared/services/model.service';

import { S3UploadService } from 'src/app/shared/services/s3-upload.service';
@Component({
  selector: 'app-modal-upload',
  templateUrl: './modal-upload.component.html',
  styleUrls: ['./modal-upload.component.scss']
})
export class ModalUploadComponent implements OnInit {
  selectedFiles!: FileList;

  constructor(private s3UploadService: S3UploadService,public modelService:ModelService) {
   }

  ngOnInit(): void {
  }

  upload() {
    const file = this.selectedFiles.item(0);
    this.s3UploadService.uploadFile(file,'mm/');
  }

  selectFile(event?:any) {
    this.selectedFiles = event.target.files;
  }



}
