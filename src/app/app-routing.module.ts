import { ReverseAuthGuard } from './shared/guards/auth/reverse-auth.guard';
import { AuthGuard } from './shared/guards/auth/auth.guard';
import { LoginComponent } from './authentication/login/login.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { FullLayoutComponent } from './layouts/full-layout/full-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: "",
    component: FullLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
      },
    ]
  },
  {
    path: "",
    component: BlankLayoutComponent,
    canActivate: [ReverseAuthGuard],
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
