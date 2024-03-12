import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonModule, DropdownModule, GridModule, WidgetModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { WidgetsDropdownComponent } from './widgets-dropdown.component';

describe('WidgetsDropdownComponent', () => {
  let component: WidgetsDropdownComponent;
  let fixture: ComponentFixture<WidgetsDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetsDropdownComponent ],
      imports: [WidgetModule, DropdownModule, IconModule, ButtonModule, ChartjsModule, GridModule],
      providers: []
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
