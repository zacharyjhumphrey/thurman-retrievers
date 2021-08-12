import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDogCardComponent } from './view-dog-card.component';

describe('ViewDogCardComponent', () => {
  let component: ViewDogCardComponent;
  let fixture: ComponentFixture<ViewDogCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDogCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDogCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
