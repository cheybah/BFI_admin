import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { Page404Component } from './views/pages/page404/page404.component';
import { Page500Component } from './views/pages/page500/page500.component';
import { LoginComponent } from './views/pages/login/login.component';
import { RegisterComponent } from './views/pages/register/register.component';
import { DashboardModule } from './views/dashboard/dashboard.module';
import { KanbanComponent } from './views/pages/writer-pages/kanban/kanban.component';
import { PagesModule } from './views/pages/pages.module';
import { ClientsComponent } from './views/pages/clients/clients.component';
import { BlogsComponent } from './views/pages/blogs/blogs.component';
import { EmployeeComponent } from './views/pages/employee/employee.component';
import { AccountsComponent } from './views/pages/accounts/accounts.component';
import { PaymentComponent } from './views/pages/payment/payment.component';
import { TransferComponent } from './views/pages/transfer/transfer.component';
import { VirementhistoriqueComponent } from './views/pages/virementhistorique/virementhistorique.component';

import { WithdrawalComponent } from './views/pages/withdrawal/withdrawal.component';
import { CollectionComponent } from './views/pages/collection/collection.component';
import { ServicesComponent } from './views/pages/services/services.component';
import { AgencyComponent } from './views/pages/agency/agency.component';
import {ProfileComponent } from './views/pages/profile/profile.component';
import { ChatComponent } from './views/pages/chat/chat.component';
import { RendezVousComponent } from './views/pages/rendez-vous/rendez-vous.component';
import { ReclamationComponent } from './views/pages/reclamation/reclamation.component';
import { DepothistoriqueComponent } from './views/pages/depothistorique/depothistorique.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: ''
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () => DashboardModule
      },
      {
        path: 'writer-dash/kanban',
        component: KanbanComponent,
        data: {
          title: 'Kanban Page'
        }
      },
      {
        path: 'pages',
        loadChildren: () => PagesModule
      },
      {
        path: 'admin-dash/clients',
        component : ClientsComponent,    
      },
      {
        path: 'admin-dash/agency',
        component : AgencyComponent,    
      },
      {
        path: 'admin-dash/chat',
        component : ChatComponent,    
      },
      {
        path: 'admin-dash/rendez-vous',
        component : RendezVousComponent,    
      },
      {
        path: 'admin-dash/reclamation',
        component : ReclamationComponent,    
      },
      {
        path: 'writer-dash/blogs',
        component : BlogsComponent,    
      },
      {
        path: 'admin-dash/employee',
        component : EmployeeComponent,    
      },
      {
        path: 'admin-dash/accounts',
        component : AccountsComponent,    
      } ,
    
      {
        path: 'admin-dash/services',
        component : ServicesComponent,    
      }
      ,
      {
        path: 'admin-dash/collection',
        component : CollectionComponent,    
      }
      ,
      {
        path: 'admin-dash/transfer',
        component : TransferComponent,    
      } ,
      {
        path: 'admin-dash/depot',
        component : DepothistoriqueComponent,    
      } ,
      
      {
        path: 'admin-dash/historique',
        component : VirementhistoriqueComponent,    
      } ,
      {
        path: 'admin-dash/withdrawal',
        component : WithdrawalComponent,    
      } ,
      {
        path: 'admin-dash/payment',
        component : PaymentComponent,    
      }
    ]
  },
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    } 
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'kanban',
    component: KanbanComponent,
    data: {
      title: 'Kanban Page'
    }
  },
  {
    path: 'profil',
    component: ProfileComponent ,
    data: {
      title: 'Admin Page'
    }
  },
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}