import {Component, OnInit, ViewChild} from '@angular/core';
import {OrderService} from "../../services/order.service";
import {MatDialog, MatPaginator, MatSort} from "@angular/material";
import {ActivatedRoute} from "@angular/router";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {OpenDialogCreateOrderComponentComponent} from "./open-dialog-create-order-component/open-dialog-create-order-component.component";
import {TokenStorageService} from "../../auth/token-storage.service";
import {OrderEx} from "../../entity/OrderEx";
import {OpenDialogUpdateComponent} from "./open-dialog-update/open-dialog-update.component";
import {HelpOfOrderComponent} from "../../helps/help-of-order/help-of-order.component";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class OrdersComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: Object[];
  userName: string;
  orderEx: OrderEx;
  public searchText: string;

  private id: number;
  private name: string;
  private customersName: string;
  private telNumber: string;
  private address: string;
  dateOfContract: string;
  dateOfCreate: string;

  displayedColumns: string [] = ['name', 'address', 'telNumber', 'customersName', 'dateOfCreate', 'dateOfContract'];

  constructor(private service: OrderService, private route: ActivatedRoute,
              public dialogC: MatDialog,
              public dialogU: MatDialog,
              public dialogH: MatDialog,
              private tokenStorage: TokenStorageService,) {
  }

  ngOnInit() {
    this.userName = this.tokenStorage.getUsername();
    this.getAllOrders(this.userName);
  }

  openHelpDilog(){
    const dialogRef = this.dialogH.open(HelpOfOrderComponent, {
      width: '600px',
      data: {userName: this.userName}
    });
    dialogRef.afterClosed().subscribe(result => {

    });
  }

  getAllOrders(userName: string) {
    this.service.getAllByUserName(userName).subscribe(
      (data: any[]) => {
        this.dataSource = (data);
        if(data.length == 0){
          this.openHelpDilog();
        }
      });
  }

  openDialogCreateOrder() {
    const dialogRef = this.dialogC.open(OpenDialogCreateOrderComponentComponent, {
      width: '600px',
      data: {
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.id = result.id;
      this.name = result.name;
      this.customersName = result.customersName;
      this.address = result.address;
      this.telNumber = result.telNumber;
      this.orderEx = this.createOrder();
      this.save(this.orderEx);
    });
  }

  openDialogUpdateOrder(element:OrderEx) {
    const dialogRef = this.dialogU.open(OpenDialogUpdateComponent, {
      width: '600px',
      data: {
        id: element.id, name: element.name, customersName: element.customersName,
        telNumber: element.telNumber, address: element.address
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.id = result.id;
      this.name = result.name;
      this.customersName = result.customersName;
      this.address = result.address;
      this.telNumber = result.telNumber;
      this.orderEx = this.createOrder();
      this.save(this.orderEx);
    });
  }

  createOrder() {
    return new OrderEx(this.id, this.name, this.address, this.customersName, this.telNumber,
      null, null, this.userName);
  }

  save(data) {
    this.service.save(data).subscribe((data:any) =>{
     this.dataSource.push(data);
      this.searchText = 'Adding...';
      setTimeout(()=>{
        this.searchText = ''
      },2000)
    });
  }
}


