import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ResetComponent } from './auth/reset/reset.component';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { NopageComponent } from './auth/nopage/nopage.component';
import { HomeComponent } from './dashboard/home/home.component';
import { SupportComponent } from './dashboard/support/support.component';
import { TimesheetComponent } from './dashboard/timesheet/timesheet.component';
import { AttendenceComponent } from './dashboard/attendence/attendence.component';
import { NoticeboardComponent } from './dashboard/noticeboard/noticeboard.component';
import { ContactComponent } from './dashboard/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    DashboardComponent,
    LoginComponent,
    SignupComponent,
    ResetComponent,
    ForgotComponent,
    NopageComponent,
    HomeComponent,
    SupportComponent,
    TimesheetComponent,
    AttendenceComponent,
    NoticeboardComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
