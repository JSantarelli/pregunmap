import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeammapComponent } from './teammap.component';

describe('TeammapComponent', () => {
  let component: TeammapComponent;
  let fixture: ComponentFixture<TeammapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeammapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeammapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
