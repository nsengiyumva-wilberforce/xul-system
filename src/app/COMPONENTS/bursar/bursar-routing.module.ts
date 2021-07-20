import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { ExpendituresComponent } from './expenditures/expenditures.component';
import { FeesComponent } from './fees/fees.component';
import { IntegrationsComponent } from './integrations/integrations.component';
import { ReportsComponent } from './reports/reports.component';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { BursarComponent } from './bursar.component';

const heroRoutes: Routes = [
  { path: 'bursar', component: BursarComponent, canActivate: [AuthGuard],
},
  { path: 'fees', component: FeesComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'expenditures', component: ExpendituresComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'integrations', component: IntegrationsComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(heroRoutes)],
  exports: [RouterModule]
})
export class BursarRoutingModule { }
