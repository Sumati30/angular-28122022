import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }
  
  status : any = '';
  serverStatus : any = [
    {
      name : "server1",
      status : "offline",
      date : "22/11/2022"
    },
    {
      name : "server2",
      status : "online",
      date : "22/8/2022"
    },
    {
      name : "server3",
      status : "offline",
      date : "22/10/2022"
    },
    {
      name : "server4",
      status : "online",
      date : "22/9/2022"
    }
  ];

  ngOnInit(): void {
  }

  

}
