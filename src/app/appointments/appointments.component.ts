import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment.model';
import { AppointmentService } from '../services/appointment.service';
import { PatientService } from '../services/patient.service';
import { DoctorService } from '../services/doctor.service';
import { Patient } from '../models/patient.model';
import { Doctor } from '../models/doctor.model';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  appointments: Appointment[] = [];
  newAppointment: Appointment = { id: 0, patientId: 0, doctorId: 0, date: new Date() };
  patients: Patient[] = [];
  doctors: Doctor[] = [];

  constructor(
    private appointmentService: AppointmentService,
    private patientService: PatientService,
    private doctorService: DoctorService
  ) { }

  ngOnInit(): void {
    this.appointmentService.getAppointments().subscribe(appointments => {
      this.appointments = appointments;
    });
    this.patientService.getPatients().subscribe(patients => {
      this.patients = patients;
    });
    this.doctorService.getDoctors().subscribe(doctors => {
      this.doctors = doctors;
    });
  }

  addAppointment(): void {
    this.appointmentService.addAppointment(this.newAppointment);
    this.newAppointment = { id: 0, patientId: 0, doctorId: 0, date: new Date() };
  }

  updateAppointment(appointment: Appointment): void {
    this.appointmentService.updateAppointment(appointment);
  }

  deleteAppointment(id: number): void {
    this.appointmentService.deleteAppointment(id);
  }

  getPatientName(patientId: number): string {
    const patient = this.patients.find(p => p.id === patientId);
    return patient ? `${patient.firstName} ${patient.lastName}` : 'Unknown';
  }

  getDoctorName(doctorId: number): string {
    const doctor = this.doctors.find(d => d.id === doctorId);
    return doctor ? `${doctor.firstName} ${doctor.lastName}` : 'Unknown';
  }
}