import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilHabitatsComponent } from './accueil-habitats.component';

describe('AccueilHabitatsComponent', () => {
  let component: AccueilHabitatsComponent;
  let fixture: ComponentFixture<AccueilHabitatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccueilHabitatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccueilHabitatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
