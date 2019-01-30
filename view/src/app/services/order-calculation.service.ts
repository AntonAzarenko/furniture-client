import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class OrderCalculationService {

  constructor(private http: HttpClient) { }

  getCalculationOFOrder(id: number){
    return this.http.get('https://back-end-furniture.herokuapp.com/furniture/booker/'+ id);
  }
}
