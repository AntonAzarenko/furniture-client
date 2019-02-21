import {Component, Inject, OnInit} from '@angular/core';
import {HelpOfOrderComponent} from "../help-of-order/help-of-order.component";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-help-of-module',
  templateUrl: './help-of-module.component.html',
  styleUrls: ['./help-of-module.component.css']
})
export class HelpOfModuleComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<HelpOfOrderComponent>) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
