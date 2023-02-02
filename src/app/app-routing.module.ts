import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { CoursesComponent } from './courses/courses.component';
import { AppComponent } from './app.component';
import { DirectivesComponent } from './directives/directives.component';
import { HomeComponent } from './home/home.component';
import { PipesComponent } from './pipes/pipes.component';
import { RoutesComponent } from './routes/routes.component';


const routes: Routes = [
 
  {
    component : AppComponent,
    path : ''
  },
  {
    path:"",
    redirectTo :'/',
    pathMatch : "full"
  },
  {
    component : HomeComponent,
    path : 'home',
    children : [
      {
        component : DirectivesComponent,
        path : 'directives'
      },
      
      {
        component : PipesComponent,
        path : 'pipes'
      },
      {
        component : RoutesComponent,
        path : 'routes'
      },
    ]
  },
  // {
  //   component : DirectivesComponent,
  //   path : 'directives'
  // },
  
  // {
  //   component : PipesComponent,
  //   path : 'pipes'
  // },
  // {
  //   component : RoutesComponent,
  //   path : 'routes'
  // },
  {
    component : CoursesComponent,
    path : 'courses'
  },
  {
    component : CourseDetailsComponent,
    path : 'courses/:id'
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
