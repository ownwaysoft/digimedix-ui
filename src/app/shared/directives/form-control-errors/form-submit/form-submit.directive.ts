import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { combineLatest, fromEvent } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';
import { ResponseMessageTypes } from 'src/app/shared/enums';
import { HttpCancelService, RxjsService, SnackbarService } from 'src/app/shared/services';
@Directive({
  selector: 'form[customForm]'
})

export class FormSubmitDirective {
  isFormChangeDetected = false;
  submitted$ = fromEvent(this.element, 'submit')
    .pipe(tap(() => {
      // find invalid form control and focus on that control 
      const nativeInvalidControl = this.host.nativeElement.querySelector('.ng-invalid') as HTMLElement | any;
      if (nativeInvalidControl) {
        if (nativeInvalidControl.children.length === 0 && !nativeInvalidControl.className.includes('disabled') && !nativeInvalidControl?.['disabled']) {
          nativeInvalidControl.focus();
        }
        else {
          const nativeInvalidCustomControl = nativeInvalidControl.children[0] as HTMLElement | any;
          if (nativeInvalidCustomControl && !nativeInvalidCustomControl.className.includes('disabled') && !nativeInvalidCustomControl?.['disabled'])
            nativeInvalidCustomControl.focus();
        }
      }
      // show popup on submitted form has an undeitable values
      const classNames = this.element.className.split(' ');
      // this.rxjsService.getFormChangeDetectionProperty().subscribe((isFormChangeDetected: boolean) => {
      //   this.isFormChangeDetected = isFormChangeDetected;
      // });
      const areFormClassNamesNotIncluded = this.isFormChangeDetected ? false :
        (!classNames.includes("ng-dirty") || classNames.includes("ng-pristine") || classNames.includes("ng-untouched"));
      const areClassNamesListOneNotIncluded = classNames.includes("ng-valid");
      if (areFormClassNamesNotIncluded && areClassNamesListOneNotIncluded) {
        this.httpCancelService.cancelPendingRequestsOnFormSubmission();
        this.rxjsService.setGlobalLoaderProperty(false);
        this.snackbarService.openSnackbar("No Changes were detected", ResponseMessageTypes.WARNING);
      }
      // else{
      //   this.host.nativeElement.querySelectorAll('button').forEach((buttonQuerySelector)=>{
      //     if(buttonQuerySelector.type=='submit'){
      //       buttonQuerySelector.disabled=true;
      //       this.rxjsService.setSubmittedBtnElement(buttonQuerySelector);
      //     }
      //   })
      // }
      if (this.element.classList.contains('submitted') === false) {
        this.renderer.addClass(this.host.nativeElement, 'submitted');
      }
      // this.rxjsService.setFormChangeDetectionProperty(false);
      // this.rxjsService.setFormChangesDetectionPropertyForPageReload(false);
    }), shareReplay(1))

  keyupValueChanged$ = fromEvent(this.element, 'keyup')
    .subscribe(() => {
      // this.rxjsService.setFormChangeDetectionProperty(true);
      // this.rxjsService.setFormChangesDetectionPropertyForPageReload(true);
    });

  onSelectionChanged$ = fromEvent(this.element, 'change')
    .subscribe(() => {
      // this.rxjsService.setFormChangeDetectionProperty(true);
      // this.rxjsService.setFormChangesDetectionPropertyForPageReload(true);
    });

  reset$ = fromEvent(this.element, 'reset');

  constructor(private host: ElementRef<HTMLFormElement>, private renderer: Renderer2,
    private httpCancelService: HttpCancelService, private rxjsService: RxjsService,
    private snackbarService: SnackbarService) {


  }

  get element() {
    return this.host.nativeElement;
  }
}