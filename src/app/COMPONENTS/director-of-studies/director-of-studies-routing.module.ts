import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectorOfStudiesComponent } from './director-of-studies.component';
import { EventsComponent } from './events/events.component';

const routes: Routes = [
  { path: 'dos', component: DirectorOfStudiesComponent },
  { path: 'events', component: EventsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectorOfStudiesRoutingModule { }
