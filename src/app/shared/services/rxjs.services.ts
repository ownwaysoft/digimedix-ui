import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })

export class RxjsService {
  
    constructor( private router: Router) {
    }

  

    private globalLoaderPropertySubject = new BehaviorSubject(false);
    private globalReloadPropertySubject = new BehaviorSubject(false);
  
  
    setGlobalLoaderProperty(isLoading: boolean) {
        this.globalLoaderPropertySubject.next(isLoading);
    }

    getGlobalLoaderProperty(): Observable<boolean> {
        return this.globalLoaderPropertySubject.asObservable();
    }

    setGlobalReloadProperty(isLoading: boolean) {
        this.globalReloadPropertySubject.next(isLoading);
    }

    getGlobalReloadProperty(): Observable<boolean> {
        return this.globalReloadPropertySubject.asObservable();
    }
  
}
