import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {OrderEx} from "../entity/OrderEx";
import {Prop} from "../properties";
import {environment} from "../../environments/environment";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Headers': 'json'})
};

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private getUrl = environment.URI + '/furniture/order/';

  private saveUrl = environment.URI + '/furniture/order';

  constructor(private http: HttpClient) {
  }

  getAllByUserName(name: string) {
    return this.http.get(this.getUrl + name);
  }

  get(id: number) {
    return this.http.get(this.getUrl + id);
  }

  save(order: OrderEx) {
    console.log(order);
    return this.http.post<OrderEx>(this.saveUrl, order, httpOptions);
  }
}
