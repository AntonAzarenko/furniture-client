import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EdgeMaterialServiceService {

  private getUrl = environment.URI + '/furniture/edge';

  constructor(private http: HttpClient) {
  }

  getAllEdge() {
    return this.http.get(this.getUrl);
  }
}
