import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

export interface DialogUpdateData {
  id: number;
  name: string;
  customersName: string;
  telNumber: string;
  address: string;
}

@Component({
  selector: 'app-open-dialog-update',
  templateUrl: './open-dialog-update.component.html',
  styleUrls: ['./open-dialog-update.component.css']
})
export class OpenDialogUpdateComponent implements OnInit {
  id: number;
  name: string;
  customersName: string;
  telNumber: string;
  address: string;

  constructor(public dialogRef: MatDialogRef<OpenDialogUpdateComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogUpdateData) {
  }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
