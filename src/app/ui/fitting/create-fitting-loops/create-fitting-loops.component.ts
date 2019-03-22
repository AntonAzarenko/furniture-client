import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { LoopsService } from 'src/app/services/fitting/loops.service';
import { Loops } from 'src/app/entity/Loops';


@Component({
  selector: 'app-create-fitting-loops',
  templateUrl: './create-fitting-loops.component.html',
  styleUrls: ['./create-fitting-loops.component.css']
})
export class CreateFittingLoopsComponent implements OnInit {

  constructor(private service: LoopsService) { }

  public id;
  public manufacturerName: string;
  public country: string;
  public type: string;
  public fileName: string;
  public angle: string;
  public microLift: boolean;
  public price: string;

  public loops: Loops;
  
  showFile = false;
  fileUploads: Observable<string[]>;

  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };

  isaddFailed = false;
  errorMessage = '';

  ngOnInit() {
  }

  addLoops(){
    this.upload();
    this.loops = this.createLoops();
    this.service.save(this.loops).subscribe();
  }

  createLoops(){
    this.fileName = this.currentFileUpload.name;
      return new Loops(this.id, this.manufacturerName, this.country, this.type, this.fileName, this.angle, this.microLift, this.price);
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.progress.percentage = 0;
 
    this.currentFileUpload = this.selectedFiles.item(0);
    this.service.upload(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });
 
    this.selectedFiles = undefined;
  }

}
