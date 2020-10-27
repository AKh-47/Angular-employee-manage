import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeRegisterationComponent } from './employee-registeration/employee-registeration.component';

const routes: Routes = [
  { path: 'list', component: EmployeeListComponent },
  { path: 'new', component: EmployeeRegisterationComponent },
  { path: '', redirectTo: 'new', pathMatch: 'full' },
  { path: '**', redirectTo: 'list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
