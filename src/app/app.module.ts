import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MaterialModule } from './shared/modules/material.module';
import { ModalUploadComponent } from './components/modal-upload/modal-upload.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SuccessErrorHandlerInterceptor } from './shared/services';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    LayoutComponent,
    PageNotFoundComponent,
    ModalUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    Title,
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: SuccessErrorHandlerInterceptor
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
