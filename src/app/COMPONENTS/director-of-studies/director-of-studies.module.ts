import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FullCalendarModule } from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import { ReactiveFormsModule } from '@angular/forms';

import { DirectorOfStudiesRoutingModule } from './director-of-studies-routing.module';
import { DirectorOfStudiesComponent } from './director-of-studies.component';

FullCalendarModule.registerPlugins([
  interactionPlugin,
  dayGridPlugin
]);


@NgModule({
  declarations: [
    DirectorOfStudiesComponent,
  ],
  imports: [
    CommonModule,
    FullCalendarModule,
    HttpClientModule,
    ReactiveFormsModule,
    DirectorOfStudiesRoutingModule
  ],
  exports: [  ]
})
export class DirectorOfStudiesModule { }
