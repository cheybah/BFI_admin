import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { DashboardComponent } from './admin-dash/dashboard.component';
import { WriterDashComponent } from './writer-dash/writer-dash.component';


const routes: Routes = [
  {
    path: 'admin-dash',
    component: DashboardComponent,
    data: {
      title: $localize`Dashboard`
    }
  },
  {
    path: 'writer-dash',
    component: WriterDashComponent,
    data: {
      title: $localize`Writer Dashboard`
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
