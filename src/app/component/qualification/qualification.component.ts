import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qualification',
  templateUrl: './qualification.component.html',
  styleUrls: ['./qualification.component.css']
})
export class QualificationComponent implements OnInit {
  public subjects = [
    { id: 1, subject: "Mathematics" },
    { id: 2, subject: "Maths Literacy" },
    { id: 3, subject: "CAT" },
    { id: 4, subject: "Life/Physical Science" },
    { id: 5, subject: "Computer Science" },

  ];

  public qualifications = [
    { id: 1, qualification: "Post Grad" },
    { id: 2, qualification: "Degree" },
    { id: 3, qualification: "BTech" },
    { id: 4, qualification: "Diploma" },
    { id: 5, qualification: "National Certificate" },
    { id: 6, qualification: "Matric" },
    { id: 7, qualification: "Other" }
  ];
  public yesOrNo = [
    { id: 1, status: "Yes" },
    { id: 2, status: "No" }
  ];
  constructor() { }

  ngOnInit() {
  }

}
