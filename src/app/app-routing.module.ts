import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ColorDetailComponent} from "./ui/colordetail/colordetail.component";
import {DetailsComponent} from "./ui/details/details.component";
import {ModuleComponent} from "./ui/modules/module.component";
import {GreetingComponent} from "./ui/greeting/greeting.component";
import {OrdersComponent} from "./ui/orders/orders.component";
import {OrderCalculationComponent} from "./ui/order-calculation/order-calculation.component";
import {RegisterComponent} from "./ui/register/register.component";
import {LogoutComponent} from "./ui/logout/logout.component";
import {AboutComponent} from "./ui/about/about.component";
import { UserProfileComponent } from './ui/user-profile/user-profile.component';

const routes: Routes = [
  {path: '', redirectTo: '/greeting', pathMatch: 'full'},
  {path: 'greeting', component: GreetingComponent},
  {path: 'colors', component: ColorDetailComponent},
  {path: 'details', component: DetailsComponent},
  {path: 'modules/get/:id', component: ModuleComponent},
  {path: 'modules/:id/details', component: DetailsComponent},
  {path: 'orders/order/:name/modules/:id', component : ModuleComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'order-calculation/:id', component:  OrderCalculationComponent},
  {path: 'signup', component: RegisterComponent },
  {path: 'login', component: GreetingComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'about', component: AboutComponent},
  {path: 'user/profile', component: UserProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
