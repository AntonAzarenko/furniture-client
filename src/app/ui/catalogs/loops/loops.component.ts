import { Component, OnInit } from '@angular/core';
import { LoopsService } from 'src/app/services/fitting/loops.service';

@Component({
  selector: 'app-loops',
  templateUrl: './loops.component.html',
  styleUrls: ['./loops.component.css']
})
export class LoopsComponent implements OnInit {

  public loopsList: Object[];

  constructor(private loopService: LoopsService) { }

  ngOnInit() {
    this.getAllLoops();
  }

  getAllLoops() {
    this.loopService.getAllLoops().subscribe(
      (data:any[]) => {
          this.loopsList = data;
          console.log(this.loopsList);
    });
  }

}
