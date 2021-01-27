import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  data =[];
  topics =[];
  constructor(
    private dataService:DataService
  ) { }

  ngOnInit(): void {    
    if(this.dataService.navBarCategory!=null){      
      this.getData(this.dataService.url);
    }
    else {console.log('oke');}    
  }  
  getData(id){    
    this.dataService.getData(id).subscribe(data=>{
      this.data=data;      
      for (let i of this.dataService.navBarCategory){
        if(i._id==id){
          this.topics.push(i.child);
          break;
        }
        else {
          for (let u of i.child){
            if(u._id==id){
              this.topics.push(u.child);
              break;
            }
          }
        }
      } 
      console.log(this.topics);
    });
  }  
}
