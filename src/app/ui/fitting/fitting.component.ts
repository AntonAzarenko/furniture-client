import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-fitting',
  templateUrl: './fitting.component.html',
  styleUrls: ['./fitting.component.css']
})
export class FittingComponent implements OnInit {

  public fromAdd = "catalog";
  public toAdd = null;
  public fittingType;
  public fittingCreateType;

  constructor() {
  }

  ngOnInit() {
  }

  checkFrom() {
    if (this.fromAdd == 'catalog') {
      this.toAdd='catalog';
      this.fittingCreateType = null;
      return true;
    }
    else {

      return false;
    }
  }

  checkTo() {
    if (this.toAdd == 'catalog') {
      return true;
    }
    this.fittingCreateType = null;

    return false;
  }

  checkCreateHandle(){
      if(this.fittingCreateType == "handle"){
        return true;
      }
      else return false;
  }

}
