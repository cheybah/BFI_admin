import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {
  AvatarModule,
  ButtonGroupModule,
  ButtonModule,
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
import { CardModule } from '@coreui/angular';

import {ClientsComponent} from '../pages/clients/clients.component'

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
    CardModule,
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
  WriterDashComponent,
  ClientsComponent]
})
export class DashboardModule {
}
