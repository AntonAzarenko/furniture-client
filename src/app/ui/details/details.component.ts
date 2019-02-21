import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSnackBar, MatSort} from '@angular/material';
import {DetailService} from "../../services/detail.service";
import {ActivatedRoute} from "@angular/router";
import {ColorService} from "../../services/colorservice.service";
import {EdgeMaterialServiceService} from "../../services/edge-material-service.service";
import {animate, state, style, transition, trigger} from "@angular/animations";
import {DetailCreateDialogComponent} from "./detail-create-dialog/detail-create-dialog.component";
import {Details} from "../../entity/Details";
import {OrderStorageService} from "../../services/order-storage.service";


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DetailsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  dataSource: Details[];

  public searchText: string;
  public moduleOfFur: Object;
  public orderName: string;

  id: number;
  colors: Object[];
  edgeMat: Object[];

  private creDetail: Details;
  private name: string;
  private x: string;
  private y: string;
  private count: string;
  private thickness: string;
  private material: string;
  public colorId: number;
  public color_Id: number;
  private edgeOnX: boolean;
  private edgeOnY: boolean;
  private edgeTypeY: string;
  private edgeTypeX: string;
  private edgeSideX: string;
  private edgeSideY: string;
  private edgeIdSideX: number;
  private edgeIdSideY: number;
  private moduleId: number;
  private colorTitle: string;


  constructor(private service: DetailService,
              public colorService: ColorService,
              public edgeService: EdgeMaterialServiceService,
              private route: ActivatedRoute,
              public dialog: MatDialog,
              public snackBar: MatSnackBar,
              public orderStorage: OrderStorageService) {
  }

  displayedColumns: string[] = ['name', 'y', 'x', 'count', 'thickness', 'material', 'button'];

  ngOnInit() {
    this.getDetByModID();
    this.colorService.getAllColorMaterial().subscribe((data: any[]) => {
      this.colors = (data)
    });
    this.edgeService.getAllEdge().subscribe(
      (data: any[]) => {
        this.edgeMat = (data);
        console.log(this.edgeMat)
      }
    );
    this.orderName = this.orderStorage.getOrderName();
  }

  getDetByModID(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.moduleId = id;
    this.getNameByModId();
    this.service.getDetailsByModuleId(id).subscribe(
      (data: any[]) => {
        this.dataSource = (data);
        console.log(this.dataSource);
      }
    );
    console.log(this.dataSource);
  }

  getNameByModId() {
    this.service.getNameByModId(this.moduleId).subscribe(
      (data: any) => {
        this.moduleOfFur = data;
        console.log(data)
      });
  }

  delete(id: number): void {
    this.service.deleteDetail(id).subscribe();
    this.dataSource = this.dataSource.filter(item => item.id != id);
  }

  openDialogCreateDetail(event) {
    const dialogRef = this.dialog.open(DetailCreateDialogComponent, {
      width: '1000px',
      data: {colors: this.colors}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.name = result.name;
      this.x = result.x;
      this.y = result.y;
      this.count = result.count;
      this.setThickness(result.thickness);
      this.setMaterial(result.material);
      this.setColor();
      this.moduleId = +this.route.snapshot.paramMap.get('id');
      this.save(this.createDetail());
    });
  }

  createDetail(): Details {
    this.creDetail = new Details(null, this.name, this.x, this.y, this.count, this.thickness, this.material,
      this.colorId, this.edgeOnX, this.edgeOnY, this.edgeTypeY, this.edgeTypeX, this.edgeSideX, this.edgeSideY,
      this.edgeIdSideX, this.edgeIdSideY,
      this.moduleId);
    return this.creDetail;
  }

  setThickness(item: string) {
    if (item == null) {
      this.thickness = "18";
    } else {
      this.thickness = item;
    }
  }

  setMaterial(item: string): void {
    if (item == null) {
      this.material = "DSP";
    } else {
      this.material = item;
    }
  }

  setColor(): void {
    if (this.colorId == null) {
      this.colorId = 1;
    }
  }

  save(data) {
    this.service.save(data).subscribe((data: any) => {
      this.dataSource.push(data);
      this.searchText = "Adding...";
      this.snackBar.open('Деталь успешно создана', 'Ok', {
        duration: 2000,
      });
      setTimeout(() => {
        this.searchText = "";
      }, 2000)
    });

  }

  updateDetail(id: number) {
    let detail: Details;
    let indexOfDetail: number = 0;
    this.dataSource.forEach(function (value, index, array) {
      if (value.id == id) {
        indexOfDetail = index;
      }
    });
    detail = this.dataSource[indexOfDetail];
    this.service.save(detail).subscribe();
    this.searchText = '1';
    this.searchText = "";
  }
}

