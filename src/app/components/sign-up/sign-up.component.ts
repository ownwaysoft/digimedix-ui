
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModulesBasedApiSuffix } from 'src/app/shared/enums';
import { CrudService, SessionService } from 'src/app/shared/services';
import { IApplicationResponse } from 'src/app/shared/utils';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  loading: boolean = false
  signupForm: FormGroup

  constructor(private formBuilder: FormBuilder, private crudService: CrudService, private sessionService: SessionService,
    private router: Router) {
    this.signupForm = this.formBuilder.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      company_name: ['', [Validators.required]],
      storage_server: ['', [Validators.required]],
      account_name: ['PrimeEnterprise', [Validators.required]],
      password: ['', [Validators.required]],
      c_password: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.getStorageServerId()
  }

  getStorageServerId() {
    this.crudService.get(ModulesBasedApiSuffix.GET_STORAGE_SERVER_ID)
      .subscribe((response: IApplicationResponse) => {
        if (response) {
          this.signupForm.get('storage_server')?.setValue(response)
        }
      }, error => {
      });
  }

  onSubmit(): void {
    this.loading = true;
    if (this.signupForm.invalid) {
      this.loading = false;
      return;
    }
    this.crudService.create(ModulesBasedApiSuffix.SIGNUP, this.signupForm.value)
      .subscribe((response: IApplicationResponse) => {
        this.loading = false;
        if (response.status == 1) {
        } else {
        }
      }, error => {
      });
  }


}

