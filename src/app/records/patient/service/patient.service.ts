import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { PersistentService } from "mds-light";
import { Patient } from "../model/patient";

@Injectable()
export class PatientService extends PersistentService<Patient> {

  constructor(protected override http: HttpClient) {
    super(http, `http://localhost:8087/v1/patients`);
  }
}
