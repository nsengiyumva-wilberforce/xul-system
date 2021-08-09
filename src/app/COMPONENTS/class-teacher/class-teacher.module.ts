import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClassTeacherRoutingModule } from './class-teacher-routing.module';
import { RegisterComponent } from './register/register.component';
import { ClassListComponent } from './class-list/class-list.component';
import { MarksComponent } from './marks/marks.component';
import { AttendanceComponent } from './attendance/attendance.component';


@NgModule({
  declarations: [
    RegisterComponent,
    ClassListComponent,
    MarksComponent,
    AttendanceComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ClassTeacherRoutingModule
  ]
})
export class ClassTeacherModule { }
