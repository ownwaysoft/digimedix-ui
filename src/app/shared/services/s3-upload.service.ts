import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';
import { environment } from 'src/environments/environment';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class S3UploadService {

  constructor(private sessionService: SessionService) { }

  uploadFile(file: any, folderName: any) {

    let userData = this.sessionService.getUserItem('userData')
    const contentType = file.type;
    const bucket = new S3(
      {
        accessKeyId: environment.S3_ACCESS_KEY,
        secretAccessKey: environment.S3_SECRET_KEY,
        region: userData?.user?.storage_server
      }
    );
    const params = {
      // Bucket: userData?.directory_info?.bucket_name,
      Bucket: 'USA',
      Key: folderName + file.name,
      Body: file,
      ACL: 'public-read',
      ContentType: contentType
    };
    bucket.upload(params, function (err: any, data: any) {
      if (err) {
        console.log('There was an error uploading your file: ', err);
        return false;
      }
      console.log('Successfully uploaded file.', data);
      return true;
    });
    //for upload progress   
    bucket.upload(params).on('httpUploadProgress', function (evt) {
      console.log(evt.loaded + ' of ' + evt.total + ' Bytes');
    }).send(function (err: any, data: any) {
      if (err) {
        console.log('There was an error uploading your file: ', err);
        return false;
      }
      console.log('Successfully uploaded file.', data);
      return true;
    });
  }
}
