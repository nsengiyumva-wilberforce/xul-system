import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectorOfStudiesComponent } from './director-of-studies.component';

const routes: Routes = [
  { path: 'dos', component: DirectorOfStudiesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectorOfStudiesRoutingModule { }
