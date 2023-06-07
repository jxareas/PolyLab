import { Component, OnInit } from "@angular/core";
import { LabelService, MdsTableComponent } from "mds-light";
import { NormalValues } from '../../model/normal-values';
import { NormalValuesService } from "../../service/normal-values.service";
import { ExamService } from "../../../exam/service/exam.service";
import { GenderService } from "../../../../categories/gender/service/gender.service";
import { Exam } from "../../../exam/model/exam";
import { Gender } from "../../../../categories/gender/model/gender";

@Component({
  selector: 'jx-normal-values-table',
  templateUrl: './normal-values-table.component.html',
  styleUrls: ['./normal-values-table.component.scss'],
})
export class NormalValuesTableComponent extends MdsTableComponent<NormalValues> implements OnInit {
  exams: Exam[];
  genders: Gender[];
  constructor(
    private normalValuesService: NormalValuesService,
    private examService: ExamService,
    private genderService: GenderService,
    labelService: LabelService,
  ) {
    super(labelService);
  }

  ngOnInit(): void {
    this.examService.findAll().subscribe(data => (this.exams = data));
    this.genderService.findAll().subscribe(data => (this.genders = data));
    this.normalValuesService.getChanges().subscribe(data => (this.items = data));
    this.normalValuesService.findAll().subscribe(data => (this.items = data));
  }

  getExamNameById(examId: number): string  {
    const exam = this.exams.find(e => e.examId === examId);
    // eslint-disable-next-line
    return exam ? exam.description as string  : 'exam not available';
  }

  getGenderDescriptionById(genderId: number): string {
    const gender: Gender | undefined  = this.genders.find(g => g.genderId === genderId);
    // eslint-disable-next-line
    return gender ? gender.description as string : 'gender not available';
  }
}
