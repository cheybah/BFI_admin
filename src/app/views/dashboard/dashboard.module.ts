import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {
  AvatarModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  FormModule,
  GridModule,
  NavModule,
  ProgressModule,
  TableModule,
  TabsModule
} 

from '@coreui/angular';
import { ChartjsModule } from '@coreui/angular-chartjs';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './admin-dash/dashboard.component';
import { WriterDashComponent } from './writer-dash/writer-dash.component';
import { WidgetsModule } from '../widgets/widgets.module';

@NgModule({
  imports: [
    DashboardRoutingModule,
    CardModule,
    NavModule,
    TabsModule,
    CommonModule,
    GridModule,
    ProgressModule,
    ReactiveFormsModule,
    ButtonModule,
    FormModule,
    ButtonModule,
    ButtonGroupModule,
    ChartjsModule,
    AvatarModule,
    TableModule,
    WidgetsModule
  ],
  declarations: [
  DashboardComponent,
  WriterDashComponent]
})
export class DashboardModule {
}
