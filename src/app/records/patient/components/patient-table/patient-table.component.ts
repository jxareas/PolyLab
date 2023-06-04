import { Component } from '@angular/core';
import { MdsTableComponent } from "mds-light";
import { Patient } from "../../model/patient";

@Component({
  selector: 'jx-patient-table',
  templateUrl: './patient-table.component.html',
  styleUrls: ['./patient-table.component.sass']
})
export class PatientTableComponent extends MdsTableComponent<Patient> {

}
