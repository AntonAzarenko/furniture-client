import {Injectable} from '@angular/core';

import { HttpClient, HttpEvent, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { HandleCreate } from 'src/app/entity/HandleCreate';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Headers': 'handle'
  })
};

@Injectable({
  providedIn: 'root'
})
export class FittingService {

  private URL = environment.URI + '/furniture';

  constructor(private http: HttpClient) {
  }

  save(handle: File): Observable<HttpEvent<{}>> {
    console.log(handle);
    const formdata: FormData = new FormData();
 
    formdata.append('file', handle);
 
    const req = new HttpRequest('POST', this.URL + "/file/upload", formdata, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    console.log("getting files");
    return this.http.get(this.URL + "/getallfiles");
  }

  saveHandle(handle: HandleCreate): Observable<HttpEvent<{}>>{
    const formdata: FormData = new FormData();
    
    const request = new HttpRequest('POST', this.URL + "/fittings/handle", handle)
    return this.http.request(request);
  }

  abort(){
    return this.http.get(this.URL + "/abort");
  }

  getFittingsOfModule(id: string){
    return this.http.get(this.URL + "/fittings/module/" + id);
  }
}
