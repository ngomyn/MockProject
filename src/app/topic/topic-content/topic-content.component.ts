import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';



@Component({
  selector: 'app-topic-content',
  templateUrl: './topic-content.component.html',
  styleUrls: ['./topic-content.component.css']
})
export class TopicContentComponent implements OnInit {
  topics =[];
  constructor(
    private dataService:DataService
  ) { }

  ngOnInit(): void {
    this.test();
  }
  test(){
    this.dataService.getData("").subscribe(data=>{            
      for (let i of data){
        if(i.parent_id=='600584515e529c0013607e46'){
        this.topics.push(i.name);
        }
      }
      console.log(this.topics);
    });
  }
}
