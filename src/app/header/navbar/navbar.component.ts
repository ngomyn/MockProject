import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navBarCategory1=[];
  navBarCategory2=[];
  child1 = []
  child2 = []
  constructor(
    private dataService:DataService
  ) { }

  ngOnInit(): void {
    this.showCategory();
  }
  // test(){
  //   this.dataService.getData().subscribe(data=>{
  //     this.navBarObject=data;
  //     for (let i of data){
  //       if(i.parent_id==null){
  //       this.navBarArray.push(i.name);
  //       }
  //     }
  //     console.log(data);
  //   })
  // }
      
  showCategory(){
    this.dataService.getData().subscribe(
      data => {
        this.navBarCategory1 = data.filter((item)=> item.parent_id == null);
        this.navBarCategory2 = data.filter((item)=> item.parent_id)
        this.navBarCategory1.forEach((item)=>{
          item.child = []
          this.navBarCategory2.forEach((i)=>{
            if(i.parent_id == item._id){
              item.child.push(i);
            }
          })
          item.child.forEach((element) => {
            element.children = []
            this.navBarCategory2.forEach((x) => {
              if(x.parent_id == element._id){
                element.children.push(x);
              }
            })
            this.child2 = element.children
          })
          this.child1 = item.child
        })
        
        console.log(this.navBarCategory1);
        console.log(this.navBarCategory2);
        
      }
    )
  }
}
