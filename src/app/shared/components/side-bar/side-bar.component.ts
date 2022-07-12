import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../services';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  constructor(private sessionService:SessionService,private router:Router) { }

  ngOnInit(): void {
  }

  logOut(){
    this.sessionService.removeAllItem()
    this.router.navigate(['/'])
  }

}
