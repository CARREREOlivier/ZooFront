import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHabitatComponent } from './dashboard-habitat.component';

describe('DashboardHabitatComponent', () => {
  let component: DashboardHabitatComponent;
  let fixture: ComponentFixture<DashboardHabitatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardHabitatComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardHabitatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
