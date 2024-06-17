import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilAvisComponent } from './accueil-avis.component';

describe('AccueilAvisComponent', () => {
  let component: AccueilAvisComponent;
  let fixture: ComponentFixture<AccueilAvisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccueilAvisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccueilAvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
