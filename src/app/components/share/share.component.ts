import { Component, OnInit } from '@angular/core';
import { ModelService } from 'src/app/shared/services/model.service';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss'],
})
export class ShareComponent implements OnInit {
  panelOpenState = false;

  constructor() {}

  ngOnInit(): void {}


}
