import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZooPresentationComponent } from './zoo-presentation.component';

describe('ZooPresentationComponent', () => {
  let component: ZooPresentationComponent;
  let fixture: ComponentFixture<ZooPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZooPresentationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZooPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
