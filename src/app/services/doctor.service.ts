import { Injectable } from '@angular/core';
import { Doctor } from '../models/doctor.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private doctors: Doctor[] = [];
  private doctorsSubject = new BehaviorSubject<Doctor[]>([]);

  constructor() { }

  getDoctors(): Observable<Doctor[]> {
    return this.doctorsSubject.asObservable();
  }

  addDoctor(doctor: Doctor): void {
    doctor.id = this.doctors.length + 1;
    this.doctors.push(doctor);
    this.doctorsSubject.next([...this.doctors]);
  }

  updateDoctor(doctor: Doctor): void {
    const index = this.doctors.findIndex(d => d.id === doctor.id);
    if (index !== -1) {
      this.doctors[index] = doctor;
      this.doctorsSubject.next([...this.doctors]);
    }
  }

  deleteDoctor(id: number): void {
    this.doctors = this.doctors.filter(d => d.id !== id);
    this.doctorsSubject.next([...this.doctors]);
  }
}