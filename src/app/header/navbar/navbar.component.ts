import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navItem:any;
  constructor(
   private data: DataService
  ) { }

  ngOnInit(): void {
    this.data.getData().subscribe(
      data => this.navItem = data,
      () => console.log(this.navItem)
      
    )
  }

}
