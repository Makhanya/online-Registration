import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-enrolment',
  templateUrl: './course-enrolment.component.html',
  styleUrls: ['./course-enrolment.component.css']
})
export class CourseEnrolmentComponent implements OnInit {

  public courses = [
    { id: 1, course: "ICT Infrastructure" },
    { id: 2, course: "Java Launch" },
    { id: 3, course: "Java Rise" },
    { id: 4, course: "Software Engineering Bootcamp" },
    { id: 5, course: "Advanced Project Management (online)" },
  ];
  constructor() { }

  ngOnInit() {
  }

}
