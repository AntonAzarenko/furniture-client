import {Component, OnInit} from '@angular/core';
import {HandleCreate} from "../../../entity/HandleCreate";
import {FittingService} from "../../../services/fitting.service";

@Component({
  selector: 'app-create-fitting-handle',
  templateUrl: './create-fitting-handle.component.html',
  styleUrls: ['./create-fitting-handle.component.css']
})
export class CreateFittingHandleComponent implements OnInit {

  public handle: HandleCreate;
  public  handles: HandleCreate[];

  public file: File;
  public color: string;
  public betweenCenter: string;
  public article: string;

  public gold: boolean;
  public chrome_bright: boolean;
  public chrome_matt: boolean;
  public satin: boolean;
  public other: boolean;

  public nintysix: boolean;
  public oneHundredTwentyEight: boolean;
  public oneHundrednintyTwo: boolean;
  public twoHundredFivtySix: boolean;
  public otherCenter: boolean;

  constructor(private service: FittingService) {
  }

  ngOnInit() {
  }

  onChangeFile(event) {
    this.file = event.target.files[0];
  }

  onSubmit() {
    console.log(this.handle);

    this.service.save(this.file).subscribe();
  }

  createHandle() {
      return  new HandleCreate(this.file, this.color, this.betweenCenter, this.gold, this.chrome_bright,
      this.chrome_matt, this.satin, this.other, this.nintysix, this.oneHundredTwentyEight, this.oneHundrednintyTwo,
      this.twoHundredFivtySix, this.otherCenter, this.article)
  }

}
