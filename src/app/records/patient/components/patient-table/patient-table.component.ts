import { Component, OnInit } from "@angular/core";
import { LabelService, MdsTableComponent } from "mds-light";
import { Patient } from "../../model/patient";
import { PatientService } from "../../service/patient.service";

@Component({
  selector: 'jx-patient-table',
  templateUrl: './patient-table.component.html',
  styleUrls: ['./patient-table.component.sass']
})
export class PatientTableComponent extends MdsTableComponent<Patient> implements OnInit {
  constructor(
    private patientService: PatientService,
    labelService: LabelService,
  ) {
    super(labelService);
  }

  ngOnInit() {
    this.patientService.getChanges().subscribe(data => (this.items = data));
    this.patientService.findAll().subscribe(data => (this.items = data));
  }
}
