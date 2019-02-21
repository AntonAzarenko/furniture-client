import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FurnitureModule} from "../entity/FurnitureModule";
import {environment} from "../../environments/environment";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Headers': 'json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  private getUrl = environment.URI + '/furniture/module/';

  private saveUrl = environment.URI + '/furniture/module';

  private deleteUrl = environment.URI + '/furniture/module/';

  constructor(private http: HttpClient) {
  }

  getAll(id: number) {
    console.log(id);
    return this.http.get(this.getUrl + id);
  }

  save(moduleF: FurnitureModule) {
    console.log(moduleF);
    return this.http.post<FurnitureModule>(this.saveUrl, moduleF, httpOptions);
  }

  delete(id: number) {
    console.log(id);
    this.http.delete(this.deleteUrl + id).subscribe();
  }
}
