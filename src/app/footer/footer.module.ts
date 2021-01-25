import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CopyrightComponent } from './copyright/copyright.component';
import { SiteMapComponent } from './site-map/site-map.component';



@NgModule({
  declarations: [
    CopyrightComponent,
    SiteMapComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CopyrightComponent,
    SiteMapComponent
  ]
})
export class FooterModule { }
