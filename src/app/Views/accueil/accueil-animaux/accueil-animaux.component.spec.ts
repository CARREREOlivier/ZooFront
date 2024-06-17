import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilAnimauxComponent } from './accueil-animaux.component';

describe('AccueilAnimauxComponent', () => {
  let component: AccueilAnimauxComponent;
  let fixture: ComponentFixture<AccueilAnimauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccueilAnimauxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccueilAnimauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
