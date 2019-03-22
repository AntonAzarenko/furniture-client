import { Component, OnInit } from '@angular/core';
import { HandleService } from 'src/app/services/fitting/handle.service';
import { Handle } from 'src/app/entity/Handle';
import { HandleParams } from 'src/app/entity/HandleParams';
import { HandleToOrder } from 'src/app/entity/HandleToOrder';
import { ActivatedRoute } from '@angular/router';
import { FittingComponent } from '../../fitting/fitting.component';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-handle',
  templateUrl: './handle.component.html',
  styleUrls: ['./handle.component.css']
})
export class HandleComponent implements OnInit {

  constructor(private handleService: HandleService,
          public route: ActivatedRoute,
          public fc: FittingComponent,
          public snackBar: MatSnackBar) { }

  hto: HandleToOrder;

  public handles: Handle[];

  public colors: Object[];

  handleCol: string;

  handleCD: string;

  isShowColors = false;
  isShowCenDist = false;
  isShowButtonAdd = false;

  handleId: string;
  count:string;

  public infoP = false;

   handleParam: HandleParams[];

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.handleService.getAll().subscribe(
      (data:any) => {
        this.handles = data;
      }
    )
  }

  infoHandle(){
  this.handleService.getColors(this.handleId).subscribe(
    (data: any[]) => {
      this.colors = data;
    });
    console.log(this.colors)
    this.isShowColors = true;
  }

  infoHandleParams(){
    this.handleService.getParams(this.handleId).subscribe(
      (data:any[]) =>{
        this.handleParam = data;
      });
      console.log(this.handleCol)
      this.isShowCenDist = true;
  }

  addCentDist(){
    console.log(this.handleCD);
    this.isShowButtonAdd = true;
  }

  addToOrder(){
    const id = this.route.snapshot.params['id'];
    this.hto = new HandleToOrder(this.handleId, this.handleCol, this.handleCD, this.count, id,"Handle")
    this.handleService.addToOrder(this.hto).subscribe();
    setTimeout(() => {
      this.fc.getAllFitting();
      this.snackBar.open('Ручка  успешно добавленна', 'Ok', {
        duration: 3000,
      });
    }, 2000);
    
  }
}
