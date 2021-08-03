import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { ClassTeacherComponent } from './COMPONENTS/class-teacher/class-teacher.component';
import { HeadmasterComponent } from './COMPONENTS/headmaster/headmaster.component';
import { DirectorComponent } from './COMPONENTS/director/director.component';
import { SignOutComponent } from './auth/sign-out/sign-out.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './PAGES/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClassTeacherModule } from './COMPONENTS/class-teacher/class-teacher.module';
import { DirectorModule } from './COMPONENTS/director/director.module';
import { DirectorOfStudiesModule } from './COMPONENTS/director-of-studies/director-of-studies.module';
import { HeadmasterModule } from './COMPONENTS/headmaster/headmaster.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    ClassTeacherComponent,
    HeadmasterComponent,
    DirectorComponent,
    SignOutComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClassTeacherModule,
    DirectorModule,
    DirectorOfStudiesModule,
    HeadmasterModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
