import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'multipart/form-data',
    'Headers': 'file'
  })
};

@Injectable({
  providedIn: 'root'
})
export class FittingService {

  private saveUrl = environment.URI + '/furniture/fitting';

  constructor(private http: HttpClient) {
  }

  save(handle: File) {
    console.log(handle);
    return this.http.post(this.saveUrl, handle, httpOptions);
  }
}
