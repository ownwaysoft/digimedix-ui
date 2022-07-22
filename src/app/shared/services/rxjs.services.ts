import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })

export class RxjsService {

    constructor(private router: Router) {
    }



    private globalProgressBarPropertySubject = new BehaviorSubject(false);
    private globalProgressBarUploadePropertySubject = new BehaviorSubject(false);
    private globalProgressBarUploadeProgressPropertySubject = new BehaviorSubject(0);
    private globalReloadPropertySubject = new BehaviorSubject(false);


    setGlobalProgressBarProperty(isLoading: boolean) {
        this.globalProgressBarPropertySubject.next(isLoading);
    }

    getGlobalProgressBarProperty(): Observable<boolean> {
        return this.globalProgressBarPropertySubject.asObservable();
    }

    setGlobalProgressBarUploadProperty(isLoading: boolean) {
        this.globalProgressBarUploadePropertySubject.next(isLoading);
    }

    getGlobalProgressBarUploadProperty(): Observable<boolean> {
        return this.globalProgressBarUploadePropertySubject.asObservable();
    }

    setGlobalProgressBarUploadProgressProperty(value: number) {
        this.globalProgressBarUploadeProgressPropertySubject.next(value);
    }

    getGlobalProgressBarUploadProgressProperty(): Observable<number> {
        return this.globalProgressBarUploadeProgressPropertySubject.asObservable();
    }

    setGlobalReloadProperty(isLoading: boolean) {
        this.globalReloadPropertySubject.next(isLoading);
    }

    getGlobalReloadProperty(): Observable<boolean> {
        return this.globalReloadPropertySubject.asObservable();
    }

}
