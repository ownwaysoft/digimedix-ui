// httpcancel.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
 
@Injectable({providedIn:'root'})
export class HttpCancelService {
 
    private pendingHTTPRequestsOnNavigation$ = new Subject<void>();
    private pendingHTTPRequestsOnFormSubmission$ = new Subject<void>();
 
  constructor() { }
 
  public cancelPendingRequestsOnNavigationChanged() {
    this.pendingHTTPRequestsOnNavigation$.next();
  }
 
  public onCancelPendingRequestsOnNavigationChanged() {
    return this.pendingHTTPRequestsOnNavigation$.asObservable();
  }

  public cancelPendingRequestsOnFormSubmission() {
    this.pendingHTTPRequestsOnFormSubmission$.next();
  }
 
  public onCancelPendingRequestsOnFormSubmission() {
    return this.pendingHTTPRequestsOnFormSubmission$.asObservable();
  }
 
}