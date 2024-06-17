import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilServicesComponent } from './accueil-services.component';

describe('AccueilServicesComponent', () => {
  let component: AccueilServicesComponent;
  let fixture: ComponentFixture<AccueilServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccueilServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccueilServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
