import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ResponseMessageTypes, RestfulMethods } from '../../enums';
import { RxjsService } from '../rxjs.services';
import { SnackbarService } from '../snackbar.service';

@Injectable({ providedIn: 'root' })
export class SuccessErrorHandlerInterceptor implements HttpInterceptor {
  restRequestMethod: RestfulMethods | any;
  request: HttpRequest<any> | any;
  constructor(private rxjsService: RxjsService, private snackbarService: SnackbarService, private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.request = request;
    this.restRequestMethod = request.method;
    return next.handle(request)
    
  }

  private successHandler(response: HttpEvent<any>): HttpEvent<any> | any {
    if (response instanceof HttpResponse) {

      if (response.body.statusCode == 404 || response.body.statusCode == 500 || response.body.statusCode == 0) {

        this.rxjsService.setGlobalLoaderProperty(false);

      }

      if (this.restRequestMethod == RestfulMethods.POST || this.restRequestMethod == RestfulMethods.PUT) {
      }

      let { body: { message, statusCode, exceptionMessage } } = response;
      let type: ResponseMessageTypes;
      switch (statusCode) {
        case 200:
          type = ResponseMessageTypes.SUCCESS;
          break;
        case 409:
          type = ResponseMessageTypes.WARNING;
          break;
        default:
          type = ResponseMessageTypes.ERROR;
          break;
      }
      if (message) {
        if (message !== 'Record not found' && !message.includes('Lead This address exists in Fidelity')) {
          this.snackbarService.openSnackbar(message, type);
        }
      }
      if (exceptionMessage) {
        this.snackbarService.openSnackbar(exceptionMessage, type);
      } else if (!exceptionMessage && !message && statusCode == 500) {
        this.snackbarService.openSnackbar("Internal Server Error", type);
      }
      return response;
    }
  }


  private errorHandler(error: HttpEvent<any>): Observable<HttpEvent<any>> | any {
    if (error instanceof HttpErrorResponse) {
      switch (error.status) {
        case 401:
          this.router.navigateByUrl("login");
          break;
        // case 500:
        //   this.snackbarService.openSnackbar(error.statusText, ResponseMessageTypes.ERROR);
        default:
          //this.snackbarService.openSnackbar("Error 403 - This web app is stopped.",ResponseMessageTypes.ERROR);
          break;
      }
      return throwError(error);
    }
  }
}