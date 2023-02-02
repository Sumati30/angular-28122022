import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesComponent } from './directives/directives.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { CustomDireciveDirective } from './custom-direcive.directive';
import { CustomPipePipe } from './custom-pipe.pipe';
import { PipesComponent } from './pipes/pipes.component';
import { RoutesComponent } from './routes/routes.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailsComponent } from './course-details/course-details.component';


@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    HomeComponent,
    CustomDireciveDirective,
    CustomPipePipe,
    PipesComponent,
    RoutesComponent,
    CoursesComponent,
    CourseDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
