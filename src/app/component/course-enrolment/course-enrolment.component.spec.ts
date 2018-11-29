import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseEnrolmentComponent } from './course-enrolment.component';

describe('CourseEnrolmentComponent', () => {
  let component: CourseEnrolmentComponent;
  let fixture: ComponentFixture<CourseEnrolmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseEnrolmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseEnrolmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
