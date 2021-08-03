import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { AttendanceComponent } from './attendance/attendance.component';
import { ClassListComponent } from './class-list/class-list.component';
import { ClassTeacherComponent } from './class-teacher.component';
import { MarksComponent } from './marks/marks.component';
import { RegisterComponent } from './register/register.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';

const routes: Routes = [
  {
    path: '',
    component: ClassTeacherComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'register', component: RegisterComponent },
          { path: 'marks', component: MarksComponent },
          { path: 'attendance', component: AttendanceComponent },
          { path: 'class-list', component: ClassListComponent },
          { path: '', component: ClassListComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassTeacherRoutingModule { }
