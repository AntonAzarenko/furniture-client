import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Details} from "../entity/Details";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs/index";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Headers': 'json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  private getAllUrl = environment.URI + '/furniture/detail';

  private getByModuleIDUrl = environment.URI + '/furniture/detail/';

  private deleteUrl = environment.URI + '/furniture/detail/';

  private saveUrl = environment.URI + '/furniture/detail';

  constructor(private http: HttpClient) {
  }

  getAllDetail() {
    return this.http.get(this.getAllUrl);
  }

  getDetailsByModuleId(id: number)  {
    return this.http.get(this.getByModuleIDUrl + id);
  }

  deleteDetail(id: number) {

    return this.http.delete(this.deleteUrl + id);
  }

  save(detail: Details) {

    return this.http.post<Details>(this.saveUrl, detail, httpOptions)
  }

  getNameByModId(id: number){
    return this.http.get(this.getAllUrl + "/name/" + id);
  }
}
