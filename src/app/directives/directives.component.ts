import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  constructor() { }

  size = 20 ;
  color = 'red' ;

  courses : any[] = [
    {title : 'AWS' , category : 'cloud'},
    {title : 'Angular' , category : 'Front-End'},
    {title : 'MongoDB' , category : 'Database'},
    {title : 'Express' , category : 'Back-end'},
    {title : 'Node' , category : 'Server-side'},
    {title : 'React' , category : 'Front-End'},
    {title : 'MongoDB' , category : 'Database'},
    {title : 'Express' , category : 'Back-end'},
  ]

  ngOnInit(): void {
  }

}
