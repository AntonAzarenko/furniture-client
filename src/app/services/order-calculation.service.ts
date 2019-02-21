import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Prop} from "../properties";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OrderCalculationService {


  private getUrl = environment.URI + '/furniture/booker/';

  constructor(private http: HttpClient) {
  }

  getCalculationOFOrder(id: number) {
    return this.http.get(this.getUrl + id);
  }
}
