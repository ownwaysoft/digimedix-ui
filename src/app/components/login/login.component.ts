import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModulesBasedApiSuffix, ResponseMessageTypes } from 'src/app/shared/enums';
import { CrudService, SessionService, SnackbarService } from 'src/app/shared/services';
import { IApplicationResponse } from 'src/app/shared/utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loading: boolean = false
  loginForm: FormGroup

  constructor(private formBuilder: FormBuilder, private crudService: CrudService, private sessionService: SessionService,
    private router: Router, private snackbarService: SnackbarService) {
    let host = window.location.toString();
    this.loginForm = this.formBuilder.group({
      email: [host.includes('localhost') ? 'admin@gmail.com' : '', [Validators.required, Validators.email]],
      password: [host.includes('localhost') ? 'admin@123' : '', [Validators.required]],
      grant_type: ['password', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.loading = true;
    if (this.loginForm.invalid) {
      this.loading = false;
      return;
    }
    this.crudService.create(ModulesBasedApiSuffix.LOGIN, this.loginForm.value)
      .subscribe((response: IApplicationResponse) => {
        this.loading = false;
        if (response.token) {
          this.snackbarService.openSnackbar('Login Success!', ResponseMessageTypes.SUCCESS)
          this.sessionService.setItem('token', response?.token)
          this.getUserData()
        } else {
          this.snackbarService.openSnackbar(response.msg, ResponseMessageTypes.WARNING)
        }
      }, error => {
        this.loading = false;
        this.snackbarService.openSnackbar(error.error.message, ResponseMessageTypes.WARNING)
      });
  }

  getUserData() {
    this.crudService.get(ModulesBasedApiSuffix.GET_USER_CLIAMS)
      .subscribe((response: any) => {
        this.loading = false;
        // if (response.status == 1) {
        // if(response){
        this.sessionService.setUserItem('userData', response)
        this.router.navigate(['dashboard'])
        // }
        // }
      }, error => {
      });
  }


}
