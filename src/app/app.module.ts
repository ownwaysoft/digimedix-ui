import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { SuccessErrorHandlerInterceptor } from './shared/services';
import { MaterialModule } from './shared/modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalDeleteFolderModule } from './shared/modules/modal-delete-folder/modal-delete-folder.module';
import { ModalUploadModule } from './shared/modules/modal-upload/modal-upload.module';
import { ModalInfoFolderModule } from './shared/modules/modal-info-folder/modal-info-folder.module';
import { ModalCreateFolderModule } from './shared/modules/modal-create-folder/modal-create-folder.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    LayoutComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ModalDeleteFolderModule,
    ModalUploadModule,
    ModalInfoFolderModule,
    ModalCreateFolderModule
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
