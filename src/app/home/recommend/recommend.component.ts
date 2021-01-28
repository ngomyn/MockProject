import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.css']
})
export class RecommendComponent implements OnInit {
  recData=[];
  constructor(
    private dataService:DataService
  ) { }

  ngOnInit(): void {
    this.fetchData();
  }
  fetchData(){
    this.dataService.getData("").subscribe(data=>{
      this.recData=data.slice(0,4);
      console.log(this.recData);
    })
  }
}
