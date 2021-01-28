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
    this.dataService.getData("").subscribe(data=>{
      this.navBarCategory1=data;
    })
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
