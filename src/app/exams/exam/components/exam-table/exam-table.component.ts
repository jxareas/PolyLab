import { Component } from '@angular/core';
import { Exam } from "../../model/exam";
import { MdsTableComponent } from "mds-light";

@Component({
  selector: 'jx-exam-table',
  templateUrl: './exam-table.component.html',
  styleUrls: ['./exam-table.component.scss']
})
export class ExamTableComponent extends MdsTableComponent<Exam> {

}
