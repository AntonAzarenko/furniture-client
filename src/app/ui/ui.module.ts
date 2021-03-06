import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {LayoutComponent} from './layout/layout.component';
import {AppRoutingModule} from "../app-routing.module";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ColorDetailComponent} from "./colordetail/colordetail.component";
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule
} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {
  ModuleComponent,
  OpenDialogToCreateModuleComponent,
  OpenDialogToDeleteModuleComponent
} from './modules/module.component';
import {GreetingComponent} from './greeting/greeting.component';
import {CdkTableModule} from "@angular/cdk/table";
import {CdkTreeModule} from "@angular/cdk/tree";
import {DetailCreateDialogComponent} from './details/detail-create-dialog/detail-create-dialog.component';
import {EdgeMaterialComponent} from './edge-material/edge-material.component';
import {OrdersComponent} from "./orders/orders.component";
import {DetailsComponent} from "./details/details.component";
import {MenuComponent} from './menu/menu.component';
import {OrderCalculationComponent} from './order-calculation/order-calculation.component';
import {OpenDialogCreateOrderComponentComponent} from './orders/open-dialog-create-order-component/open-dialog-create-order-component.component';
import {RegisterComponent} from './register/register.component';
import {LogoutComponent} from './logout/logout.component';
import {AboutComponent} from './about/about.component';
import {OpenDialogUpdateComponent} from './orders/open-dialog-update/open-dialog-update.component';
import {OpenDialogUpdateModuleComponent} from './modules/open-dialog-update-module/open-dialog-update-module.component';
import {GrdFilterPipe} from "./details/grd-filter.pipe";
import {HelpOfOrderComponent} from '../helps/help-of-order/help-of-order.component';
import {GrdFilterPipeOrder} from "./orders/grd-filter.pipe.order";
import {HelpOfModuleComponent} from "../helps/help-of-module/help-of-module.component";
import {UserProfileComponent} from './user-profile/user-profile.component';
import {CatalogsComponent} from './catalogs/catalogs.component';
import {FittingComponent} from './fitting/fitting.component';
import { CreateFittingHandleComponent } from './fitting/create-fitting-handle/create-fitting-handle.component';
import { HandleComponent } from './catalogs/handle/handle.component';
import { LoopsComponent } from './catalogs/loops/loops.component';
import { CreateFittingLoopsComponent } from './fitting/create-fitting-loops/create-fitting-loops.component';
import { HomeComponent } from './home/home.component';
import { MealComponent } from './meal/meal.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    ColorDetailComponent,
    DetailsComponent,
    ModuleComponent,
    GreetingComponent,
    OpenDialogToCreateModuleComponent,
    OpenDialogToDeleteModuleComponent,
    OrdersComponent,
    DetailCreateDialogComponent,
    EdgeMaterialComponent,
    MenuComponent,
    OrderCalculationComponent,
    OpenDialogCreateOrderComponentComponent,
    RegisterComponent,
    LogoutComponent,
    AboutComponent,
    OpenDialogUpdateComponent,
    OpenDialogUpdateModuleComponent,
    GrdFilterPipe,
    HelpOfOrderComponent,
    GrdFilterPipeOrder,
    UserProfileComponent,
    CatalogsComponent,
    FittingComponent,
    CreateFittingHandleComponent,
    HandleComponent,
    LoopsComponent,
    CreateFittingLoopsComponent,
    HomeComponent,
    MealComponent,


  ],

  imports: [
    NgbModule,
    CommonModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    CdkTableModule,
    CdkTreeModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    OpenDialogToCreateModuleComponent,
    OpenDialogToDeleteModuleComponent,
    DetailCreateDialogComponent,
    OpenDialogCreateOrderComponentComponent,
    OpenDialogUpdateComponent,
    HelpOfOrderComponent,
    HelpOfModuleComponent
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],

  exports: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    ColorDetailComponent,
    DetailsComponent,
    ModuleComponent,
    OpenDialogToCreateModuleComponent,
    OpenDialogToDeleteModuleComponent,
    OrdersComponent,
    OpenDialogCreateOrderComponentComponent,
    DetailCreateDialogComponent,
    GrdFilterPipe,
    GrdFilterPipeOrder,
    UserProfileComponent,
  ]
})
export class UiModule {
}
