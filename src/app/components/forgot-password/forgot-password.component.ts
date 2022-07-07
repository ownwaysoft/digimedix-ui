import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModulesBasedApiSuffix } from 'src/app/shared/enums';
import { CrudService } from 'src/app/shared/services';
import { IApplicationResponse } from 'src/app/shared/utils';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  isFormSubmitted: boolean = false
  loginForm: FormGroup

  constructor(private formBuilder: FormBuilder, private crudService: CrudService,
    private router: Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
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
        if (response.status == 1) {
          this.router.navigate(['login'])
        } else {
        }
      }, error => {
        this.router.navigate(['login'])
      });
  }

}
