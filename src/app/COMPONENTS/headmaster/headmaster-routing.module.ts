import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeadmasterComponent } from './headmaster.component';

const routes: Routes = [
  { path: 'headmaster', component : HeadmasterComponent },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeadmasterRoutingModule { }
