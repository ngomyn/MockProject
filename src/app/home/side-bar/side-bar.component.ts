import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  private posts=[];
  constructor(
    private dataService:DataService
  ) { }

  ngOnInit(): void {
    this.getData();
  }
  private getData(){
    this.dataService.getNewPost().subscribe(data=>{
      this.posts = data;
      this.posts.reverse();
    })
  }
}
