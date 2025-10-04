import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Main } from './pages/main/main';
import { Dashboard } from './components/dashboard/dashboard';
import { DistributorComponent } from './components/distributor-component/distributor-component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },

  // Layout route
  {
    path: 'main',
    component: Main,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        component: Dashboard,
        data: { title: 'Dashboard', breadcrumb: ['Home', 'Dashboard'] },
      },
      {
        path: 'distributor',
        component: DistributorComponent,
        data: { title: 'Distributor', breadcrumb: ['Home', 'Distributor'] },
      },
    ],
  },

  // fallback
  { path: '**', redirectTo: 'main/dashboard' },
];
