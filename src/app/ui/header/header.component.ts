import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from "../../auth/token-storage.service";
import {ActivatedRoute} from "@angular/router";
import {OrderStorageService} from 'src/app/services/order-storage.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private roles: string[];
  public authority: string;
  public orderName: string;
  public orderId: string;

  constructor(private tokenStorage: TokenStorageService,
              public route: ActivatedRoute,
              public orderStorage: OrderStorageService) {
  }

  ngOnInit() {
    this.orderName = this.orderStorage.getOrderName();
    this.orderId = this.orderStorage.getOrderId();
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        } else if (role === 'ROLE_PM') {
          this.authority = 'pm';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }
  }

  setOptions() {
    this.orderName = this.orderStorage.getOrderName();
    this.orderId = this.orderStorage.getOrderId();
    console.log(" orderId = ", this.orderId);
    console.log("orderName = ", this.orderName);
    }
}




