import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZooHorairesComponent } from './zoo-horaires.component';

describe('ZooHorairesComponent', () => {
  let component: ZooHorairesComponent;
  let fixture: ComponentFixture<ZooHorairesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZooHorairesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZooHorairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
