import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Loops } from 'src/app/entity/Loops';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoopsService {

  private URL = environment.URI + '/furniture';

  constructor(private http: HttpClient) { }

  save(loops: Loops){
    console.log(loops);
      return this.http.post<Loops>(this.URL + "/fittings/loops", loops);
  }

  upload(handle: File): Observable<HttpEvent<{}>> {
    console.log(handle);
    const formdata: FormData = new FormData();
 
    formdata.append('file', handle);
 
    const req = new HttpRequest('POST', this.URL + "/file/upload", formdata, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(req);
  }

  getAllLoops(){
    return this.http.get(this.URL + "/fittings/loops");
  }
}
