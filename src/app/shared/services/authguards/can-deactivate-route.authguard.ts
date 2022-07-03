import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RxjsService } from '../rxjs.services';

@Injectable({ providedIn: 'root' })
export class CanDeactivateGuard implements CanDeactivate<any> {
  componentKey = "";
  formGroupsCount = 0;
  isFormChangeDetected = false;
  constructor(private rxjsService: RxjsService, public dialog: MatDialog) {

  }
  canDeactivate(component:any,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot) {
    // this.rxjsService.getFormChangeDetectionProperty().subscribe((isFormChangeDetected) => {
    //   this.isFormChangeDetected = isFormChangeDetected;
    // });
    //  return true;
    if (!component) {
      return true;
    }
    this.formGroupsCount = 0;
    for (const componentKey of Object.keys(component)) {
      if (component[componentKey] instanceof FormGroup) {
        this.formGroupsCount += 1;
        this.componentKey = componentKey;
        break;
      }
    }
    if (component[this.componentKey] && this.formGroupsCount == 1) {
      if (this.isFormChangeDetected || component.isFormChangeDetected) {
        if (component?.isAutoSaveEnable) {
          return component.canDeactivate();
        } else {
          // return confirm("You have unsaved changes! If you leave, your changes will be lost.");
          return this.confirmDialog();
        }
      }
      else if (!this.isFormChangeDetected || !component.isFormChangeDetected) {
        if (component?.isAutoSaveEnable) {
          return component.canDeactivate();
        } else {
          return true;
        }
      }
    }
    else if (component.isFormChangeDetected) {
      if (component?.isAutoSaveEnable) {
        return component.canDeactivate();
      } else {
        // return confirm("You have unsaved changes! If you leave, your changes will be lost.");
        return this.confirmDialog();
      }
    }
    else {
      return true;
    }
  }

  confirmDialog(): Observable<boolean> | any {
    const message = 'You have unsaved changes! If you leave, your changes will be lost.';
    // const dialogData = new ConfirmDialogModel("Confirm Action", message);
    // const dialogRef = this.dialog.open(ConfirmDialogPopupComponent, {
    //   maxWidth: "400px",
    //   data: dialogData
    // });
    // return dialogRef.afterClosed();
  }
}
