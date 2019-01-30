import {Component, Inject, OnInit} from '@angular/core';
import {OpenDialogToDeleteModuleComponent} from "../module.component";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

export interface DialogUpdateData {
  id: number;
  type: string;
  name: string;
  order_id: number;
}

@Component({
  selector: 'app-open-dialog-update-module',
  templateUrl: './open-dialog-update-module.component.html',
  styleUrls: ['./open-dialog-update-module.component.css']
})
export class OpenDialogUpdateModuleComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<OpenDialogToDeleteModuleComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogUpdateData) {
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
