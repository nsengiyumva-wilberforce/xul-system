import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HeadmasterRoutingModule } from './headmaster-routing.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HeadmasterRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HeadmasterModule { }
