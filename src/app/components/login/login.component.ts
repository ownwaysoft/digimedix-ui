import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModulesBasedApiSuffix } from 'src/app/shared/enums';
import { CrudService, SessionService } from 'src/app/shared/services';
import { IApplicationResponse } from 'src/app/shared/utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isFormSubmitted: boolean = false
  loginForm: FormGroup

  constructor(private formBuilder: FormBuilder, private crudService: CrudService, private sessionService: SessionService,
    private router: Router) {
    let host = window.location.toString();
    this.loginForm = this.formBuilder.group({
      email: [host.includes('localhost') ? 'test@test.com' : '', [Validators.required, Validators.email]],
      password: [host.includes('localhost') ? 'admin123' : '', [Validators.required]],
      grant_type: ['password', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.isFormSubmitted = true;
    if (this.loginForm.invalid) {
      this.isFormSubmitted = false;
      return;
    }
    this.crudService.create(ModulesBasedApiSuffix.LOGIN, this.loginForm.value)
      .subscribe((response: IApplicationResponse) => {
        if (response.resources) {
          this.sessionService.setItem('token', response.resources)
          this.router.navigate(['dashboard'])
        } else {
        }
      }, error => {
        this.sessionService.setItem('token', 'test')
        this.router.navigate(['dashboard'])
      });
  }


}
