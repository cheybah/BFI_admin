import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { Page404Component } from './views/pages/page404/page404.component';
import { Page500Component } from './views/pages/page500/page500.component';
import { LoginComponent } from './views/pages/login/login.component';
import { RegisterComponent } from './views/pages/register/register.component';
import { ClientsComponent } from './views/pages/clients/clients.component';
import { BlogsComponent } from './views/pages/blogs/blogs.component';
import { ProfileComponent } from './views/pages/profile/profile.component';
import { EmployeeComponent } from './views/pages/employee/employee.component';
import { AccountsComponent } from './views/pages/accounts/accounts.component';
import { ServicesComponent } from './views/pages/services/services.component';
import { PaymentComponent } from './views/pages/payment/payment.component';
import { TransferComponent } from './views/pages/transfer/transfer.component';
import { WithdrawalComponent } from './views/pages/withdrawal/withdrawal.component';
import { CollectionComponent } from './views/pages/collection/collection.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./views/pages/pages.module').then((m) => m.PagesModule)
      },
      {
        path: 'clients',
        component : ClientsComponent,    
      },
      {
        path: 'blogs',
        component : BlogsComponent,    
      },
      {
        path: 'employee',
        component : EmployeeComponent,    
      },
      {
        path: 'accounts',
        component : AccountsComponent,    
      } ,
      {
        path: 'services',
        component : ServicesComponent,    
      }
      ,
      {
        path: 'collection',
        component : CollectionComponent,    
      }
      ,
      {
        path: 'transfer',
        component : TransferComponent,    
      } ,
      {
        path: 'withdrawal',
        component : WithdrawalComponent,    
      } ,
      {
        path: 'payment',
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
    path: 'profile',
    component: ProfileComponent,
    data: {
      title: 'profile Page'
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
