import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {OrderEx} from "../entity/OrderEx";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {
  }

  getAllByUserName(name: string) {
    return this.http.get('https://back-end-furniture.herokuapp.com/order/'+ name, httpOptions);
  }

  get(id: number) {
    return this.http.get('https://back-end-furniture.herokuapp.com/order' + id);
  }

  save(order: OrderEx){
    console.log(order);
    return this.http.post<OrderEx>('https://back-end-furniture.herokuapp.com/order',  order, httpOptions);
  }
}
