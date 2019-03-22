import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Prop} from "../properties";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OrderCalculationService {


  private URL = environment.URI + '/furniture/booker/';

  constructor(private http: HttpClient) {
  }

  getCalculationOFOrder(id: number) {
    return this.http.get(this.URL  + id);
  }

  getCalcTotal(id: number){
    return this.http.get(this.URL + "total/" + id);
  }
}
