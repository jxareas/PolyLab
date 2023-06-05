import { Injectable } from '@angular/core';
import { PersistentService } from "mds-light";
import { Doctor } from "../model/doctor";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class DoctorService extends PersistentService<Doctor> {
  constructor(protected override http: HttpClient) {
    super(http, `http://localhost:8083/v1/doctors`);
  }
}
