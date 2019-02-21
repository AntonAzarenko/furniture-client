import { Injectable } from '@angular/core';

const ORDER_ID_KEY = 'orderId';
const ORDER_NAME_KEY = 'OrderName';

@Injectable({
  providedIn: 'root'
})
export class OrderStorageService {

  constructor() { }

  getOrderName(): string{
      return sessionStorage.getItem(ORDER_NAME_KEY);
  }

  getOrderId(): string{
    return sessionStorage.getItem(ORDER_ID_KEY);
  }

  saveOrderName(name: string){
    window.sessionStorage.removeItem(ORDER_NAME_KEY);
    window.sessionStorage.setItem(ORDER_NAME_KEY, name);
  }

  saveOrderId(id: string){
    window.sessionStorage.removeItem(ORDER_ID_KEY);
    window.sessionStorage.setItem(ORDER_ID_KEY, id);
  }
}
