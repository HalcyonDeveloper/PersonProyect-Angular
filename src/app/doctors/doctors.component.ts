import { Component, OnInit } from '@angular/core';
import { Doctor } from '../models/doctor.model';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  doctors: Doctor[] = [];
  newDoctor: Doctor = { id: 0, firstName: '', lastName: '', phone: '' };

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.doctorService.getDoctors().subscribe(doctors => {
      this.doctors = doctors;
    });
  }

  addDoctor(): void {
    this.doctorService.addDoctor(this.newDoctor);
    this.newDoctor = { id: 0, firstName: '', lastName: '', phone: '' };
  }

  updateDoctor(doctor: Doctor): void {
    this.doctorService.updateDoctor(doctor);
  }

  deleteDoctor(id: number): void {
    this.doctorService.deleteDoctor(id);
  }
}