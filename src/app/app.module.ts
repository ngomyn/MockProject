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
import { TopicComponent } from './topic/topic.component';
import { TopicContentComponent } from './topic/topic-content/topic-content.component';
import { SubtopicComponent } from './topic/subtopic/subtopic.component';
import { SubtopicContentComponent } from './topic/subtopic/subtopic-content/subtopic-content.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CopyrightComponent,
    SiteMapComponent,
    SideBarComponent,
    RecommendComponent,
    TopicComponent,
    TopicContentComponent,
    SubtopicComponent,
    SubtopicContentComponent
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
