import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Prop} from "../properties";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  private getUrl = environment.URI + '/furniture/color/all';

  constructor(private http: HttpClient) {
  }

  getAllColorMaterial() {
    return this.http.get(this.getUrl);
  }
}

