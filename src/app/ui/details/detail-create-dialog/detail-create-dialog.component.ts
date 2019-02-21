import {Component, Inject, OnInit} from '@angular/core';
import {ErrorStateMatcher, MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";

interface DialogCreateDetailData {
  name: string;
  x: string;
  y: string;
  count: string;
  thickness: string;
  material: string;
  edgesId: string;
  colorsId: string;
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-detail-create-dialog',
  templateUrl: './detail-create-dialog.component.html',
  styleUrls: ['./detail-create-dialog.component.css']
})
export class DetailCreateDialogComponent implements OnInit {



  constructor(public dialogRef: MatDialogRef<DetailCreateDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogCreateDetailData,) {
  }
  name = new FormControl('', [Validators.required, Validators.email]);


  submit(){

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }
}
