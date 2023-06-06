import { Component, OnInit } from "@angular/core";
import { Exam } from "../../model/exam";
import { LabelService, MdsTableComponent } from "mds-light";
import { ExamService } from "../../service/exam.service";

@Component({
  selector: 'jx-exam-table',
  templateUrl: './exam-table.component.html',
  styleUrls: ['./exam-table.component.scss']
})
export class ExamTableComponent extends MdsTableComponent<Exam> implements OnInit {
  constructor(
    private examService: ExamService,
    labelService: LabelService,
  ) {
    super(labelService);
  }

  ngOnInit() {
    this.examService.getChanges().subscribe(data => (this.items = data));
    this.examService.findAll().subscribe(data => (this.items = data));
  }
}
