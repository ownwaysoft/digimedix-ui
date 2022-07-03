import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarConfig,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { ResponseMessageTypes } from '../enums';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  private setAutoHide: boolean = true;
  private autoHide: number = 5000;
  private horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  private verticalPosition: MatSnackBarVerticalPosition = 'top';
  private config = new MatSnackBarConfig();

  constructor(private snackbar: MatSnackBar) {
    this.config.horizontalPosition = this.horizontalPosition;
    this.config.verticalPosition = this.verticalPosition;
    this.config.duration = this.setAutoHide ? this.autoHide : 0;
  }

  /**
  * type : 'success' or 'error */
  openSnackbar(message: string, type: ResponseMessageTypes) {
    let isMessageContainsArray = false;
    if (message?.includes('[{')) {
      isMessageContainsArray = true;
      message = isMessageContainsArray ? JSON.parse(message) : message;
    }
    this.config.data = { message, type, isMessageContainsArray };
    this.config.panelClass = ((type === ResponseMessageTypes.SUCCESS) ? ['success'] : (type === ResponseMessageTypes.ERROR) ? ['error'] :
      (type === ResponseMessageTypes.WARNING) ? ['warning'] : ['info']);
    // this.snackbar.openFromComponent(CustomSnackBarComponent, this.config)
  }
}

