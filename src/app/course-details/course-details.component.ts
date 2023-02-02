import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  id: any;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.params.subscribe(params => {
    //   this.id = params['id'] ;
    // })
    //Use above approach or the one mentioned below
    let courseId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.id = courseId ;
  }
  
}
