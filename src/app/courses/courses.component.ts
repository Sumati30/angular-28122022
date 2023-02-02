import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor( private route:Router) { }

  ngOnInit(): void {
  }
  courses = [
    {"id":1 , "name":"Angular"},
    {"id":2 , "name":"React"},
    {"id":3 , "name":"Cloud-computing"},
    {"id":4 , "name":"React-native"},
    {"id":5 , "name":"Azure"},
    {"id":6 , "name":"AWS"},
  ]

  openCourse(course){
     this.route.navigate(['/courses', course.id])
  }
}
