import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../service/data.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navBarCategory1=[];
  navBarCategory2=[];
  child1 : any
  child2 : any
  constructor(
    private dataService:DataService,
    private router:Router
  ) { }

  ngOnInit(): void {
    if(this.dataService.navBarCategory!=null){      
      this.showCategory();
    }
    else {console.log('oke');}    
  }
  showCategory(){
    const subject = new Subject();
    this.dataService.getData("").subscribe(
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
          item.child.forEach((grand) => {
            grand.child = []
            this.navBarCategory2.forEach((x) => {
              if(x.parent_id == grand._id){
                grand.child.push(x);
              }
            })
          })
        })
        console.log(this.navBarCategory1);
        this.dataService.navBarCategory=this.navBarCategory1;
        subject.next(this.navBarCategory1);
      }
    )
  }
  toTopic(id){
    console.log(id);
    this.dataService.url= id;
    this.router.navigate(['/topic']);
  };
  toSubTopic(id){
    console.log(id);
    this.dataService.getData(id).subscribe(data=>{
      console.log(data);
      // this.router.navigate(['/subtopic']);
    })
  };
  goHome(){
    this.router.navigateByUrl("");
  }
}
