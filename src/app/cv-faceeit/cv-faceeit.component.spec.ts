import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvFaceeitComponent } from './cv-faceeit.component';

describe('CvFaceeitComponent', () => {
  let component: CvFaceeitComponent;
  let fixture: ComponentFixture<CvFaceeitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CvFaceeitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CvFaceeitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
