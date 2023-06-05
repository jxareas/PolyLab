import { Injectable } from '@angular/core';
import { PersistentService } from "mds-light";
import { Exam } from "../model/exam";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ExamService extends PersistentService<Exam> {
  constructor(protected override http: HttpClient) {
    super(http, `http://localhost:8084/v1/exams`);
  }
}
