import { Component, OnInit } from '@angular/core';
import { RxjsService } from '../../services';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  loading: boolean = false
  fileLoading: boolean = false
  value: number = 0
  constructor(private rxjsServices: RxjsService) {
    this.rxjsServices.getGlobalProgressBarProperty().subscribe(val => {
      this.loading = val
    })
    this.rxjsServices.getGlobalProgressBarUploadProperty().subscribe(val => {
      this.fileLoading = val
    })
    this.rxjsServices.getGlobalProgressBarUploadProgressProperty().subscribe(val => {
      this.value = val
    })
  }

  ngOnInit(): void {
  }

}
