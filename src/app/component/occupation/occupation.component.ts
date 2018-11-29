import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-occupation',
  templateUrl: './occupation.component.html',
  styleUrls: ['./occupation.component.css']
})
export class OccupationComponent implements OnInit {


  public occupations = [
    { id: 1, current: "Employeed" },
    { id: 2, current: "Part-time employeed" },
    { id: 3, current: "Unemployeed" },
    { id: 4, current: "Studying" },
    { id: 5, current: "Studying and working" },
    { id: 6, current: "Internship" },
  ];
  constructor() { }

  ngOnInit() {
  }

}
