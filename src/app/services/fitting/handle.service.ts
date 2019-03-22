import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { HandleToOrder } from 'src/app/entity/HandleToOrder';


@Injectable({
  providedIn: 'root'
})
export class HandleService {

  private URL = environment.URI + '/furniture';

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(this.URL+"/catalog/handles") ;
  }

  getColors(id: string){
    return this.http.get(this.URL + "/fittings/handle/"+ id)
  }

  getParams(id: string){
    return this.http.get(this.URL + "/catalog/handles/" + id);
  }

  addToOrder(hto: HandleToOrder){
    console.log(hto)
    return this.http.post<HandleToOrder>(this.URL + "/fittings/handle/add", hto);
  }


}
