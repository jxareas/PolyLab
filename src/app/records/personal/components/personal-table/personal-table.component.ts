import { Component } from '@angular/core';
import { MdsTableComponent } from "mds-light";
import { Doctor } from "../../model/doctor";

@Component({
  selector: 'jx-personal-table',
  templateUrl: './personal-table.component.html',
  styleUrls: ['./personal-table.component.sass']
})
export class PersonalTableComponent extends MdsTableComponent<Doctor> {

}
