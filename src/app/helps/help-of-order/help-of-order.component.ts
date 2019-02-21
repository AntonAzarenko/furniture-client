import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {DialogUpdateData} from "../../ui/orders/open-dialog-update/open-dialog-update.component";

interface DialogHelpData{
  userName: string;
}

@Component({
  selector: 'app-help-of-order',
  templateUrl: './help-of-order.component.html',
  styleUrls: ['./help-of-order.component.css']
})
export class HelpOfOrderComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<HelpOfOrderComponent>,
  @Inject(MAT_DIALOG_DATA) public data: DialogHelpData) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
