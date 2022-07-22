import { Component, OnInit } from '@angular/core';
import { ModelService } from 'src/app/shared/services/model.service';

@Component({
  selector: 'app-common-share',
  templateUrl: './common-share.component.html',
  styleUrls: ['./common-share.component.scss']
})
export class CommonShareComponent implements OnInit {

  selectedFiles!: FileList;

  constructor(public modelService: ModelService) {}

  ngOnInit(): void {}

  selectFile(event?: any) {
    this.selectedFiles = event.target.files;
  }


}
