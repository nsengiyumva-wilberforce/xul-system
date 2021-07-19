import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HeadmasterRoutingModule } from './headmaster-routing.module';
import { TeachersComponent } from './teachers/teachers.component';
import { RegisterComponent } from './register/register.component';
import { RolesComponent } from './roles/roles.component';
import { SchoolAssetsComponent } from './school-assets/school-assets.component';



@NgModule({
  declarations: [
    TeachersComponent,
    RegisterComponent,
    RolesComponent,
    SchoolAssetsComponent
  ],
  imports: [
    CommonModule,
    HeadmasterRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HeadmasterModule { }
