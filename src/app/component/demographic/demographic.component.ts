import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demographic',
  templateUrl: './demographic.component.html',
  styleUrls: ['./demographic.component.css']
})
export class DemographicComponent implements OnInit {

  public titles = [
    { id: 1, title: "Ms" },
    { id: 2, title: "Miss" },
    { id: 3, title: "Mr" },
    { id: 4, title: "Mrs" },
    { id: 5, title: "Dr" },
  ];

  public sexs = [
    { id: 1, gender: "Male" },
    { id: 2, gender: "Female" }
  ];
  public provinces = [
    { id: 1, province: "Eastern Cape" },
    { id: 2, province: "Free State" },
    { id: 3, province: "Gauteng" },
    { id: 4, province: "KwaZulu-Natal" },
    { id: 5, province: "Limpopo" },
    { id: 6, province: "Mpumalanga" },
    { id: 7, province: "Northern Cape" },
    { id: 8, province: "North West" },
    { id: 9, province: "Western Cape" }
  ];
  public marital = [
    { id: 1, status: "Married" },
    { id: 2, status: "Single" },
    { id: 3, status: "Divorced" },
    { id: 4, status: "Widowed" },

  ];
  constructor() { }

  ngOnInit() {
  }

}
