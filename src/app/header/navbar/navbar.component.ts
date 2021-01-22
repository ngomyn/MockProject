import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navBarArray=[];
  navBarObject={};
  constructor(
    private dataService:DataService
  ) { }

  ngOnInit(): void {
    this.test();
  }
  test(){
    this.dataService.getData().subscribe(data=>{
      console.log(data);
      this.navBarObject=data;
      for (let i of data){
        if(i.parent_id==null){
        this.navBarArray.push(i.name);
        }
      }
      console.log(data);
    })
  }
      
  
}
