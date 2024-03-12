import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriterDashComponent } from './writer-dash.component';

describe('WriterDashComponent', () => {
  let component: WriterDashComponent;
  let fixture: ComponentFixture<WriterDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WriterDashComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WriterDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
