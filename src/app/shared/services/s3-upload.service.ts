import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';
import { environment } from 'src/environments/environment';
import { SessionService } from './session.service';
import { RxjsService } from './rxjs.services';
import { SnackbarService } from './snackbar.service';
import { ResponseMessageTypes } from '../enums';

@Injectable({
  providedIn: 'root'
})
export class S3UploadService {

  constructor(private sessionService: SessionService, private rxjsService: RxjsService, private snackbarService: SnackbarService) { }

  uploadFile(file: any) {

    this.rxjsService.setGlobalProgressBarUploadProperty(true)
    let userData = this.sessionService.getUserItem('userData')
    let folderName = this.sessionService.getItem('currentFolderName')
    const contentType = file.type;
    const bucket = new S3(
      {
        accessKeyId: environment.S3_ACCESS_KEY,
        secretAccessKey: environment.S3_SECRET_KEY,
        // region: userData?.user?.storage_server,
        region: userData?.user?.region ? userData?.user?.region : 'ca-central-1',
        maxRetries: 3,
        // region: 'ca-central-1'
      }
    );
    const params = {
      Bucket: userData?.directory_info?.bucket_name,
      Key: (folderName ? folderName.substring(1) : '') + file.name,
      Body: file,
      //  partSize: 10 * 1024 * 1024,
      //  queueSize: 1,
      //  ACL: 'bucket-owner-full-control',
      ACL: 'public-read',
      ContentType: contentType
    };
    // bucket.upload(params, (err: any, data: any) => {
    //   if (err) {
    //     console.log('There was an error uploading your file: ', err);
    //     this.snackbarService.openSnackbar('There was an error uploading your file', ResponseMessageTypes.ERROR)
    //     this.rxjsService.setGlobalProgressBarUploadProperty(false)
    //     return false;
    //   }
    //   console.log('Successfully uploaded file.', data);

    //   this.snackbarService.openSnackbar('Successfully uploaded file', ResponseMessageTypes.SUCCESS)
    //   this.rxjsService.setGlobalProgressBarUploadProperty(false)
    //   return true;
    // });
    //for upload progress   
    bucket.upload(params).on('httpUploadProgress', (evt) => {
      console.log(evt.loaded + ' of ' + evt.total + ' Bytes');
      file.progress = (evt.loaded / evt.total) * 100;
      console.log(file.progress)
      this.rxjsService.setGlobalProgressBarUploadProgressProperty(file.progress)
    }).send((err: any, data: any) => {
      if (err) {
        console.log('There was an error uploading your file: ', err);
        this.snackbarService.openSnackbar('There was an error uploading your file', ResponseMessageTypes.ERROR)
        this.rxjsService.setGlobalProgressBarUploadProperty(false)
        return false;
      }
      console.log('Successfully uploaded file.', data);

      this.snackbarService.openSnackbar('Successfully uploaded file', ResponseMessageTypes.SUCCESS)
      this.rxjsService.setGlobalProgressBarUploadProperty(false)
      return true;
    });

  }

}
