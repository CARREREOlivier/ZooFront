import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZooServicesComponent } from './zoo-services.component';

describe('ZooServicesComponent', () => {
  let component: ZooServicesComponent;
  let fixture: ComponentFixture<ZooServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZooServicesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZooServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
