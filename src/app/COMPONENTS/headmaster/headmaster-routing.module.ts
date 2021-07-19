import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeadmasterComponent } from './headmaster.component';
import { RegisterComponent } from './register/register.component';
import { RolesComponent } from './roles/roles.component';
import { SchoolAssetsComponent } from './school-assets/school-assets.component';
import { TeachersComponent } from './teachers/teachers.component';

const routes: Routes = [
  { path: 'headmaster', component : HeadmasterComponent },
  { path: 'teachers', component : TeachersComponent },
  { path: 'register', component : RegisterComponent },
  { path: 'roles', component : RolesComponent },
  { path: 'assets', component : SchoolAssetsComponent },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeadmasterRoutingModule { }
