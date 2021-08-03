import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DirectorComponent } from './COMPONENTS/director/director.component';
import { HeadmasterComponent } from './COMPONENTS/headmaster/headmaster.component';
import { HomeComponent } from './PAGES/home/home.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'bursar', loadChildren: () => import('./COMPONENTS/bursar/bursar.module').then(m => m.BursarModule)},
  { path: 'class-teacher', loadChildren: () => import('./COMPONENTS/class-teacher/class-teacher.module').then(m => m.ClassTeacherModule)},
  { path: 'director', component: DirectorComponent},
  { path: 'sign-in', component: SignInComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
