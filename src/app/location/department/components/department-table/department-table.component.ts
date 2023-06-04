import { Component } from '@angular/core';
import { Department } from "../../model/department";
import { MdsTableComponent } from "mds-light";

@Component({
  selector: 'jx-department-table',
  templateUrl: './department-table.component.html',
  styleUrls: ['./department-table.component.sass']
})
export class DepartmentTableComponent extends MdsTableComponent<Department> {

}
