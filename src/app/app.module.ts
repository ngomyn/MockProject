import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { HeaderModule } from './header/header.module';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';

import { SideBarComponent } from './home/side-bar/side-bar.component';
import { RecommendComponent } from './home/recommend/recommend.component';
import { FooterModule } from './footer/footer.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SideBarComponent,
    RecommendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    HttpClientModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
