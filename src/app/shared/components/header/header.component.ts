import { Component, OnInit } from '@angular/core';
import { RxjsService } from '../../services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  loading: boolean = false
  constructor(public rxjsServices: RxjsService) {
    this.rxjsServices.getGlobalLoaderProperty().subscribe(val => {
      this.loading = val
    })
  }

  ngOnInit(): void {
  }

}
