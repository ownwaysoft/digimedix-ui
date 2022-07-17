import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  isTokenValid(): boolean {
    return sessionStorage.getItem('token') ? true : false;
  }

  setItem(item: any, value: any) {
    return sessionStorage.setItem(item, value)
  }

  getItem(item: any) {
    return sessionStorage.getItem(item)
  }

  setUserItem(item: any, value: any) {
    return sessionStorage.setItem(item, JSON.stringify(value))
  }

  getUserItem(item: any) {
    let data: any = sessionStorage.getItem(item)
    return JSON.parse(data)
  }

  removeItem(item: any) {
    sessionStorage.removeItem(item)
  }

  removeAllItem() {
    sessionStorage.clear()
  }

}
