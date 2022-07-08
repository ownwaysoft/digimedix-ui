
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CountryISO } from 'ngx-intl-tel-input';
import { ModulesBasedApiSuffix, ResponseMessageTypes } from 'src/app/shared/enums';
import { CrudService, SessionService, SnackbarService } from 'src/app/shared/services';
import { IApplicationResponse } from 'src/app/shared/utils';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  loading: boolean = false
  signupForm: FormGroup
  storageServerList: any = []

  separateDialCode = false;
  CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [CountryISO.India, CountryISO.UnitedStates, CountryISO.UnitedKingdom];

  constructor(private formBuilder: FormBuilder, private crudService: CrudService, private sessionService: SessionService,
    private router: Router, private snackbarService: SnackbarService) {
    this.signupForm = this.formBuilder.group({
      firstname: ['', [Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(100)])]],
      lastname: ['', [Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(100)])]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      company_name: ['', [Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(100)])]],
      storage_server: ['', [Validators.required]],
      account_name: ['', [Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(50)])]],
      password: ['', [Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(100)])]],
      c_password: ['', [Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(100)])]]
    })
  }

  ngOnInit(): void {
    this.getStorageServerId()
  }

  getStorageServerId() {
    this.crudService.get(ModulesBasedApiSuffix.SIGNUP)
      .subscribe((response: any) => {
        if (response) {
          // this.signupForm.get('storage_server')?.setValue(response)
          this.storageServerList = response?.storage_server
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
    let formValue = this.signupForm.getRawValue()
    formValue.phone = formValue.phone.e164Number
    this.crudService.create(ModulesBasedApiSuffix.SIGNUP, formValue)
      .subscribe((response: IApplicationResponse) => {
        this.loading = false;
        if (response.status == 1) {
          this.snackbarService.openSnackbar(response.msg, ResponseMessageTypes.SUCCESS)
          this.router.navigate(['/login'])
        } else {
          this.snackbarService.openSnackbar(response.msg, ResponseMessageTypes.WARNING)
        }
      }, error => {
        this.loading = false;
        this.snackbarService.openSnackbar(error.error.message, ResponseMessageTypes.WARNING)
      });
  }


}

