import { Component, OnInit } from '@angular/core';
import {Prop} from "../../properties";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public  version: string;
  constructor() { }

  ngOnInit() {
    this.version = Prop.version
  }

}
