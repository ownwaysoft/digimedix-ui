import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';
import { environment } from 'src/environments/environment';
import { SessionService } from './session.service';
import { RxjsService } from './rxjs.services';

@Injectable({
  providedIn: 'root'
})
export class S3UploadService {

  constructor(private sessionService: SessionService, private rxjsService: RxjsService) { }

  uploadFile(file: any) {

    let userData = this.sessionService.getUserItem('userData')
    let folderName = this.sessionService.getItem('currentFolderName')
    const contentType = file.type;
    const bucket = new S3(
      {
        accessKeyId: environment.S3_ACCESS_KEY,
        secretAccessKey: environment.S3_SECRET_KEY,
        // region: userData?.user?.storage_server,
        region: userData?.user?.region ? userData?.user?.region : 'ca-central-1',
        // region: 'ca-central-1'
      }
    );
    const params = {
      Bucket: userData?.directory_info?.bucket_name,
      Key: (folderName ? folderName.substring(1) : '') + file.name,
      Body: file,
      ACL: 'public-read',
      ContentType: contentType
    };
    bucket.upload(params, (err: any, data: any) =>{
      if (err) {
        console.log('There was an error uploading your file: ', err);
        return false;
      }
      console.log('Successfully uploaded file.', data);
      this.rxjsService.setGlobalReloadProperty(true)
      return true;
    });
    //for upload progress   
    bucket.upload(params).on('httpUploadProgress', (evt)=> {
      console.log(evt.loaded + ' of ' + evt.total + ' Bytes');
      this.rxjsService.setGlobalLoaderProperty(true)
    }).send((err: any, data: any)=> {
      if (err) {
        console.log('There was an error uploading your file: ', err);
        return false;
      }
      console.log('Successfully uploaded file.', data);
      this.rxjsService.setGlobalLoaderProperty(false)
      return true;
    });
  }
}
