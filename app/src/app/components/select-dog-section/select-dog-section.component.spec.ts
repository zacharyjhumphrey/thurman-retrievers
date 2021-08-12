import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDogSectionComponent } from './select-dog-section.component';

describe('SelectDogSectionComponent', () => {
  let component: SelectDogSectionComponent;
  let fixture: ComponentFixture<SelectDogSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectDogSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectDogSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
