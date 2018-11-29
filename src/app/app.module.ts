import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DemographicComponent } from './component/demographic/demographic.component';
import { QualificationComponent } from './component/qualification/qualification.component';
import { OccupationComponent } from './component/occupation/occupation.component';
import { AdditionalInformationComponent } from './component/additional-information/additional-information.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { onlineRegistrationAppModule } from 'src/app/onlineRegistrationAppModule';
import { CourseEnrolmentComponent } from './component/course-enrolment/course-enrolment.component';
import { UploadDocumentsComponent } from './component/upload-documents/upload-documents.component';



@NgModule({
  declarations: [
    AppComponent,
    DemographicComponent,
    QualificationComponent,
    OccupationComponent,
    AdditionalInformationComponent,
    CourseEnrolmentComponent,
    UploadDocumentsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    onlineRegistrationAppModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
