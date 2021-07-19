import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { BursarRoutingModule } from './bursar-routing.module';
import { EmployeesComponent } from './employees/employees.component';
import { ExpendituresComponent } from './expenditures/expenditures.component';
import { FeesComponent } from './fees/fees.component';
import { IntegrationsComponent } from './integrations/integrations.component';
import { ReportsComponent } from './reports/reports.component';
import { ChartsModule } from 'ng2-charts';
import { allIcons } from 'angular-feather/icons';
import { FeatherModule } from 'angular-feather';
import { HeaderComponent } from './header/header.component';
import { BursarComponent } from './bursar.component';
import { EventsComponent } from '../director-of-studies/events/events.component';
@NgModule({
  declarations: [
    EmployeesComponent,
    ExpendituresComponent,
    FeesComponent,
    IntegrationsComponent,
    ReportsComponent,
    HeaderComponent,
    BursarComponent,
    EventsComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    FeatherModule.pick(allIcons),
    BursarRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  exports: [
    HeaderComponent
  ]
})
export class BursarModule { }
