import {Component, OnInit} from '@angular/core';
import { FittingService } from 'src/app/services/fitting/fitting.service';
import { ActivatedRoute } from '@angular/router';

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
  public orderName;

  moduleFitting: Object[];

  constructor(private service: FittingService,
    public route: ActivatedRoute) {
  }
S
  ngOnInit() {
    this.getAllFitting();
  }

  getAllFitting(){
    const id = this.route.snapshot.params['id'];
      this.service.getFittingsOfModule(id).subscribe(
        (data:any[]) =>{
          this.moduleFitting = data;
          console.log(this.moduleFitting);          
        }
      )
      this.fittingType = null;
  }

  checkFrom() {
    if (this.fromAdd == 'catalog') {
      this.toAdd='catalog';
      this.fittingCreateType = null;
      return true;
    }
    else {
      this.fittingType = null;
      return false;
    }
  }

  checkTo() {
    if (this.toAdd == 'catalog') {
      return true;
    }
    this.fittingCreateType = null;
    this.fittingType = null;
    return false;
  }

  checkCreateHandle(){
      if(this.fittingCreateType == "handle"){
        return true;
      }
      else return false;
  }

  checkCreateLoops(){
    if(this.fittingCreateType == "loops"){
      return true;
    }
    else return false;
  }

  setToAdd(flag: string){
      this.toAdd = flag;
  }

  setFromAdd(flag: string){
    this.fromAdd = flag;
  }

  checkFittingTypeHandle(){
    if(this.fittingType == "handle"){
      return true;
    } 
     else {
      return false;
    }
  }
  checkFittingTypeLoop(){
    if(this.fittingType == "loops"){
      return true;
    } 
     else {
      return false;
    }
  }

}
