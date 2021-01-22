import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { HeaderModule } from './header/header.module';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CopyrightComponent } from './footer/copyright/copyright.component';
import { SiteMapComponent } from './footer/site-map/site-map.component';
import { SideBarComponent } from './home/side-bar/side-bar.component';
import { RecommendComponent } from './home/recommend/recommend.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CopyrightComponent,
    SiteMapComponent,
    SideBarComponent,
    RecommendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    HttpClientModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
