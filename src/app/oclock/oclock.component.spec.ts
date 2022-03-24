import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OclockComponent } from './oclock.component';

describe('OclockComponent', () => {
  let component: OclockComponent;
  let fixture: ComponentFixture<OclockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OclockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OclockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
