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
    return this.http.get(this.getUrl + id);
  }

  save(moduleF: FurnitureModule) {
    return this.http.post<FurnitureModule>(this.saveUrl, moduleF, httpOptions);
  }

  delete(id: number) {
    this.http.delete(this.deleteUrl + id).subscribe();
  }
}
