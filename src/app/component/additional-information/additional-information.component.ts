import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-additional-information',
  templateUrl: './additional-information.component.html',
  styleUrls: ['./additional-information.component.css']
})
export class AdditionalInformationComponent implements OnInit {

  public hearAboutUs = [
    { id: 1, hear: "CapaCiTi website" },
    { id: 2, hear: "CapaCiTi Career Exhibition" },
    { id: 3, hear: "CapaCiti Presentations" },
    { id: 4, hear: "Referred by CiTi Employee" },
    { id: 5, hear: "Referred by CiTi Alumni" },
    { id: 6, hear: "Referred by a friend/rekative/colleague" },
    { id: 7, hear: "Google Ad" },
    { id: 8, hear: "Facebook Ad" },
    { id: 9, hear: "Twitter" },
    { id: 10, hear: "Print Media" },
    { id: 11, hear: "Radio" },
    { id: 12, hear: "Whatsapp" },
    { id: 13, hear: "News Site" },
    { id: 14, hear: "LinkedIn" },
    { id: 15, hear: "Career Exhibition" },
    { id: 16, hear: "Television" },
    { id: 17, hear: "Job Site Search Engine" },
    { id: 18, hear: "Other" },

  ];
    constructor() {}

  ngOnInit() {
    }

}
