import { Injectable } from '@angular/core';
import { PersistentService } from "mds-light";
import { Department } from "../model/department";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class DepartmentService extends PersistentService<Department> {
  constructor(protected override http: HttpClient) {
    super(http, `http://localhost:8082/v1/departments`);
  }
}
