import { Component, OnInit } from "@angular/core";
import { Department } from "../../model/department";
import { LabelService, MdsTableComponent } from "mds-light";
import { DepartmentService } from "../../service/department.service";

@Component({
  selector: 'jx-department-table',
  templateUrl: './department-table.component.html',
  styleUrls: ['./department-table.component.sass']
})
export class DepartmentTableComponent extends MdsTableComponent<Department> implements OnInit {
  constructor(
    private departmentService: DepartmentService,
    labelService: LabelService,
  ) {
    super(labelService);
  }

  ngOnInit() {
    this.departmentService.getChanges().subscribe(data => (this.items = data));
    this.departmentService.findAll().subscribe(data => (this.items = data));
  }

}
