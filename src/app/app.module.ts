import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignInComponent } from './PAGES/sign-in/sign-in.component';
import { ClassTeacherComponent } from './COMPONENTS/class-teacher/class-teacher.component';
import { DirectorOfStudiesComponent } from './COMPONENTS/director-of-studies/director-of-studies.component';
import { BursarComponent } from './COMPONENTS/bursar/bursar.component';
import { HeadmasterComponent } from './COMPONENTS/headmaster/headmaster.component';
import { DirectorComponent } from './COMPONENTS/director/director.component';
import { SignOutComponent } from './PAGES/sign-out/sign-out.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './PAGES/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { FeesComponent } from './components/fees/fees.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { ExpendituresComponent } from './components/expenditures/expenditures.component';
import { ReportsComponent } from './components/reports/reports.component';
import { IntegrationsComponent } from './components/integrations/integrations.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    ClassTeacherComponent,
    DirectorOfStudiesComponent,
    BursarComponent,
    HeadmasterComponent,
    DirectorComponent,
    SignOutComponent,
    HomeComponent,
    FeesComponent,
    EmployeesComponent,
    ExpendituresComponent,
    ReportsComponent,
    IntegrationsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ChartsModule,
    FeatherModule.pick(allIcons)
  ],
  exports: [
    FeatherModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
