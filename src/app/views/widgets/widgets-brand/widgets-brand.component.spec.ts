import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridModule, WidgetModule } from '@coreui/angular';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { IconModule } from '@coreui/icons-angular';

import { WidgetsBrandComponent } from './widgets-brand.component';

describe('WidgetsBrandComponent', () => {
  let component: WidgetsBrandComponent;
  let fixture: ComponentFixture<WidgetsBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetsBrandComponent ],
      imports: [WidgetModule, GridModule, ChartjsModule, IconModule],
      providers: []
    })
    .compileComponents();
  });

  beforeEach(() => {


    fixture = TestBed.createComponent(WidgetsBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
