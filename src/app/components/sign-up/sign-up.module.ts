import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './sign-up.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';


@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    MaterialModule,
    NgxIntlTelInputModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SignUpModule { }
