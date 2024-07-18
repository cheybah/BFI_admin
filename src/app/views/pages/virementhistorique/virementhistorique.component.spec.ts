import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VirementhistoriqueComponent } from './virementhistorique.component';

describe('VirementhistoriqueComponent', () => {
  let component: VirementhistoriqueComponent;
  let fixture: ComponentFixture<VirementhistoriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VirementhistoriqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VirementhistoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
