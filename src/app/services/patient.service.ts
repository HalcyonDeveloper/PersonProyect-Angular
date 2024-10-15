import { Injectable } from '@angular/core';
import { Patient } from '../models/patient.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private patients: Patient[] = [];
  private patientsSubject = new BehaviorSubject<Patient[]>([]);

  constructor() { }

  getPatients(): Observable<Patient[]> {
    return this.patientsSubject.asObservable();
  }

  addPatient(patient: Patient): void {
    patient.id = this.patients.length + 1;
    this.patients.push(patient);
    this.patientsSubject.next([...this.patients]);
  }

  updatePatient(patient: Patient): void {
    const index = this.patients.findIndex(p => p.id === patient.id);
    if (index !== -1) {
      this.patients[index] = patient;
      this.patientsSubject.next([...this.patients]);
    }
  }

  deletePatient(id: number): void {
    this.patients = this.patients.filter(p => p.id !== id);
    this.patientsSubject.next([...this.patients]);
  }
}