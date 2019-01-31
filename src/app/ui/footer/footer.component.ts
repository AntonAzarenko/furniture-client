import { Component, OnInit } from '@angular/core';
import {Prop} from "../../entity/prop";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public  version: string;
  constructor() { }

  ngOnInit() {
    this.version = Prop.version;
  }

}
