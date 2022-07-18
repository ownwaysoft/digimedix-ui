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
    FormsModule
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
