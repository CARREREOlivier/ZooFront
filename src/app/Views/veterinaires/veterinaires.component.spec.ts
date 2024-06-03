import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinairesComponent } from './veterinaires.component';

describe('VeterinairesComponent', () => {
  let component: VeterinairesComponent;
  let fixture: ComponentFixture<VeterinairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VeterinairesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VeterinairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
