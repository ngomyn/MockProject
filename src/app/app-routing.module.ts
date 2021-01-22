import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TopicComponent } from './topic/topic.component';
import { SubtopicComponent } from './topic/subtopic/subtopic.component';

const routes: Routes = [ 
{
  path: '',
  component: HomeComponent
},
{
  path: 'topic',
  component: TopicComponent
},
{
  path: 'subtopic',
  component: SubtopicComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
