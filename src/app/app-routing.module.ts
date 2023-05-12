import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent as home } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DataUserComponent } from './pages/data-user/data-user.component'

const routes: Routes = [
  { path: '', component: home },
  { path: 'dashboard/:id', component: DashboardComponent, title: 'Dashboard' },
  { path: 'userData/:id', component: DataUserComponent, title: 'Dados do usuário' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
