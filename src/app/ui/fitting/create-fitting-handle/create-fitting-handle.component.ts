import {Component, OnInit} from '@angular/core';
import {HandleCreate} from "../../../entity/HandleCreate";
import { Observable } from 'rxjs';
import { HttpEventType, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FittingService } from 'src/app/services/fitting/fitting.service';
import { FittingComponent } from '../fitting.component';
import { fcall } from 'q';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-create-fitting-handle',
  templateUrl: './create-fitting-handle.component.html',
  styleUrls: ['./create-fitting-handle.component.css']
})
export class CreateFittingHandleComponent implements OnInit {

  public handle: HandleCreate;
  public  handles: HandleCreate[];

  public file: File;
  public fileName: string;
  public color: string;
  public betweenCenter: string;
  public article: string;

  public country: string;

  public gold: boolean;
  public chrome_bright: boolean;
  public chrome_matt: boolean;
  public satin: boolean;
  public other: string;

  public nintysix: boolean;
  public oneHundredTwentyEight: boolean;
  public oneHundrednintyTwo: boolean;
  public twoHundredFivtySix: boolean;
  public otherCenter: number;

  public  priceNinetySix: string;
  public  priceOneHundredTwentyEight: string;
  public  priceOneHundredNinetyTwo: string;
  public  priceTwoHundredFiftySix: string;
  public  priceOtherCenter: string;

  addComplited = false;

  showFile = false;
  fileUploads: Observable<string[]>;

  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };

  isaddFailed = false;
  errorMessage = '';

  constructor(private service: FittingService,
    public fc : FittingComponent,
    public snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  onChangeFile(event) {
    this.file = event.target.files[0];
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
 
  upload() {
    this.progress.percentage = 0;
 
    this.currentFileUpload = this.selectedFiles.item(0);
    this.service.save(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });
 
    this.selectedFiles = undefined;
  }

  addHandle(){
    this.upload();
    this.handle = this.createHandle()
    this.service.saveHandle(this.handle).subscribe(
      event => {
        this.fc.setFromAdd("catalog");
        this.snackBar.open('Ручка  успешно добавленна', 'Ok', {
          duration: 3000,
        });
       if(event instanceof HttpResponse){
         console.log('Handle succesfully added')
       }},
              error => {
       this.errorMessage = "Проверьте введен ли артикль, если введен возможно такая ручка уже существует";
       this.isaddFailed = true;
      }
    );
  }

  createHandle() {
      this.fileName = this.currentFileUpload.name;
      return  new HandleCreate(this.fileName,  this.gold, this.chrome_bright,
      this.chrome_matt, this.satin, this.other, this.nintysix, this.oneHundredTwentyEight, this.oneHundrednintyTwo,
      this.twoHundredFivtySix, this.otherCenter, this.article,this.priceNinetySix, this.priceOneHundredTwentyEight, this.priceOneHundredNinetyTwo, this.priceTwoHundredFiftySix,
      this.priceOtherCenter, this.country)
  }

  abort(){
    this.service.abort().subscribe();
  }
}
