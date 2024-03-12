import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridModule, WidgetModule } from '@coreui/angular';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { WidgetsEComponent } from './widgets-e.component';

describe('WidgetsEComponent', () => {
  let component: WidgetsEComponent;
  let fixture: ComponentFixture<WidgetsEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetsEComponent ],
      imports: [WidgetModule, GridModule, ChartjsModule],
      providers: []
    })
    .compileComponents();
  });

  beforeEach(() => {


    fixture = TestBed.createComponent(WidgetsEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
