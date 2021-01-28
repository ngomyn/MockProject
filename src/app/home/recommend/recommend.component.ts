import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { KinveyService } from 'src/app/service/kinvey.service';


@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.css']
})
export class RecommendComponent implements OnInit {
  recData=[];
  // fileToUpload: File = null;
  constructor(
    private dataService:DataService,    
    ) { }
  // handleFileInput(files: FileList) {
  //   this.fileToUpload = files.item(0);
  // }
  ngOnInit(): void {
    this.fetchData();
  }  
  fetchData(){
    this.dataService.getData("").subscribe(data=>{
      this.recData=data.slice(0,4);
      console.log(this.recData);
    })
  };
  
}
