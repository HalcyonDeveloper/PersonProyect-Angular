import { Injectable } from '@angular/core';
import { Appointment } from '../models/appointment.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private appointments: Appointment[] = [];
  private appointmentsSubject = new BehaviorSubject<Appointment[]>([]);

  constructor() { }

  getAppointments(): Observable<Appointment[]> {
    return this.appointmentsSubject.asObservable();
  }

  addAppointment(appointment: Appointment): void {
    appointment.id = this.appointments.length + 1;
    this.appointments.push(appointment);
    this.appointmentsSubject.next([...this.appointments]);
  }

  updateAppointment(appointment: Appointment): void {
    const index = this.appointments.findIndex(a => a.id === appointment.id);
    if (index !== -1) {
      this.appointments[index] = appointment;
      this.appointmentsSubject.next([...this.appointments]);
    }
  }

  deleteAppointment(id: number): void {
    this.appointments = this.appointments.filter(a => a.id !== id);
    this.appointmentsSubject.next([...this.appointments]);
  }
}