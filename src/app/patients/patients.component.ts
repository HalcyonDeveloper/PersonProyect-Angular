import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';

import { AppComponent } from '../app.component';
import { NavComponent } from '../nav/nav.component';
import { PatientsComponent } from '../patients/patients.component';
import { DoctorsComponent } from './app/doctors/doctors.component';
import { AppointmentsComponent } from '../appointments/appointments.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PatientsComponent,
    DoctorsComponent,
    AppointmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }