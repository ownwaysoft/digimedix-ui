import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }
 
  isTokenValid(): boolean {
    return sessionStorage.getItem('token') ? true : false;
  }

  setItem(item: string, value: any) {
    return sessionStorage.setItem(item, value)
  }

  getItem(item: any) {
    return sessionStorage.getItem(item)
  }

  removeItem(item: any) {
    sessionStorage.removeItem(item)
  }

  removeAllItem() {
    sessionStorage.clear()
  }

}
