import { Component, OnInit } from "@angular/core";
import { LabelService, MdsTableComponent } from "mds-light";
import { Doctor } from "../../model/doctor";
import { DoctorService } from "../../service/doctor.service";

@Component({
  selector: 'jx-personal-table',
  templateUrl: './personal-table.component.html',
  styleUrls: ['./personal-table.component.sass']
})
export class PersonalTableComponent extends MdsTableComponent<Doctor> implements OnInit {
  constructor(
    private doctorService: DoctorService,
    labelService: LabelService,
  ) {
    super(labelService);
  }

  ngOnInit() {
    this.doctorService.getChanges().subscribe(data => (this.items = data));
    this.doctorService.findAll().subscribe(data => (this.items = data));
  }
}
