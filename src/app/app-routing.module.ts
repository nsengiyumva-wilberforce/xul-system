import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BursarComponent } from './COMPONENTS/bursar/bursar.component';
import { ClassTeacherComponent } from './COMPONENTS/class-teacher/class-teacher.component';
import { DirectorOfStudiesComponent } from './COMPONENTS/director-of-studies/director-of-studies.component';
import { DirectorComponent } from './COMPONENTS/director/director.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { ExpendituresComponent } from './components/expenditures/expenditures.component';
import { FeesComponent } from './components/fees/fees.component';
import { HeadmasterComponent } from './COMPONENTS/headmaster/headmaster.component';
import { IntegrationsComponent } from './components/integrations/integrations.component';
import { ReportsComponent } from './components/reports/reports.component';
import { HomeComponent } from './PAGES/home/home.component';
import { SignInComponent } from './PAGES/sign-in/sign-in.component';


const routes: Routes = [
  { path: 'bursar', component: BursarComponent},
  { path: 'home', component: HomeComponent },
  { path: 'class-teacher', component: ClassTeacherComponent},
  { path: 'director', component: DirectorComponent},
  { path: 'headmaster', component : HeadmasterComponent },
  { path: 'dos', component: DirectorOfStudiesComponent},
  { path: 'sign-in', component: SignInComponent },
  { path: 'fees', component: FeesComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'expenditures', component: ExpendituresComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'integrations', component: IntegrationsComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent}
];



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
