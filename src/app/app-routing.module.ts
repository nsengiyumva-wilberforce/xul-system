import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClassTeacherComponent } from './COMPONENTS/class-teacher/class-teacher.component';
import { DirectorComponent } from './COMPONENTS/director/director.component';
import { HeadmasterComponent } from './COMPONENTS/headmaster/headmaster.component';
import { HomeComponent } from './PAGES/home/home.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'class-teacher', component: ClassTeacherComponent},
  { path: 'director', component: DirectorComponent},
  { path: 'sign-in', component: SignInComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent}
];



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
