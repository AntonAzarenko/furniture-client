import {Component, OnInit} from '@angular/core';
import {OrderEx} from "../../entity/OrderEx";
import {TokenStorageService} from "../../auth/token-storage.service";
import {OrderService} from "../../services/order.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public orders: OrderEx[];

  public email: string;

  constructor(private tokenStorage: TokenStorageService,
              private service: OrderService) {
  }

  ngOnInit() {
    this.getAllOrders();
    this.email = this.tokenStorage.getUsername();
  }

  getAllOrders() {
    const userName = this.tokenStorage.getUsername();
    this.service.getAllByUserName(userName).subscribe(
      (data: any[]) => {
        this.orders = (data);
      });
  }
}
