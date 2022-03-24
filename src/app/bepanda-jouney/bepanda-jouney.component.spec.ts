import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BepandaJouneyComponent } from './bepanda-jouney.component';

describe('BepandaJouneyComponent', () => {
  let component: BepandaJouneyComponent;
  let fixture: ComponentFixture<BepandaJouneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BepandaJouneyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BepandaJouneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
