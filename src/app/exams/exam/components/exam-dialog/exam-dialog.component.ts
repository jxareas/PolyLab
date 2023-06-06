import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { FormBuilder, FormGroup } from '@angular/forms';
import { ExamService } from '../../service/exam.service';
import { MessageService } from 'primeng/api';
import { LabelService } from 'mds-light';
import { Exam } from '../../model/exam';
import { AddOrEditExamForm, DefaultAddOrEditExamForm } from "./model/add-or-edit-exam-form";
import { catchError, switchMap, throwError } from "rxjs";

@Component({
  selector: 'jx-exam-dialog',
  templateUrl: './exam-dialog.component.html',
  styleUrls: ['./exam-dialog.component.scss'],
})
export class ExamDialogComponent implements OnInit, OnChanges {
  @Input({ required: true }) exam: Exam;
  examDialog = false;
  isEditMode = false;
  statuses: any[];
  submitted = false;
  examForm: FormGroup<AddOrEditExamForm>;

  constructor(
    private fb: FormBuilder,
    private examService: ExamService,
    private messageService: MessageService,
    protected labelService: LabelService,
  ) {}

  ngOnInit(): void {
    this.statuses = this.labelService.getDefaults();
    this.examForm = DefaultAddOrEditExamForm;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.examForm.reset();
    if (changes['exam'] && this.isEditMode) {
      this.populateForm();
    }
  }

  saveOrEditExam(): void {
    if (this.isEditMode) {
      this.updateExam();
    } else {
      this.saveExam();
    }
  }

  private populateForm() {
    this.examForm?.patchValue({
      examId: this.exam.examId,
      labAreaId: this.exam.labAreaId,
      methodologyId: this.exam.methodologyId,
      examCategoryId: this.exam.examCategoryId,
      sampleTypeId: this.exam.sampleTypeId,
      measurementUnitId: this.exam.measurementUnitId,
      resultTypeId: this.exam.resultTypeId,
      description: this.exam.description,
      shortDescription: this.exam.shortDescription,
      lisCode: this.exam.lisCode,
      count: this.exam.count,
      confidential: this.exam.confidential,
      calculated: this.exam.calculated,
      status: this.exam.status,
    });
  }

  saveExam() {
    if (this.examForm.valid) {
      const examData = this.examForm.value as Exam;
      this.examService
        .save(examData)
        .pipe(
          switchMap(() => this.examService.findAll()),
          catchError((error) => {
            this.displayErrorMessage();
            return throwError(error);
          })
        )
        .subscribe((data) => {
          this.examService.setChanges(data);
          this.displaySuccessMessage(`Added ${examData.description}`);
          this.hideDialog();
        });
    }
  }

  updateExam() {
    if (this.examForm.valid) {
      const examData = this.examForm.value as Exam;
      this.examService
        // eslint-disable-next-line
        .update(examData.examId as number, examData)
        .pipe(
          switchMap(() => this.examService.findAll()),
          catchError((error) => {
            this.displayErrorMessage();
            return throwError(error);
          })
        )
        .subscribe((data) => {
          this.examService.setChanges(data);
          this.displaySuccessMessage(`Updated ${examData.description}`);
          this.hideDialog();
        });
    }
  }

  private displayErrorMessage(): void {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'An error occurred while saving the exam.',
      life: 3000,
    });
  }

  private displaySuccessMessage(message: string): void {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: message,
      life: 3000,
    });
  }

  openDialog(): void {
    this.examDialog = true;
  }

  hideDialog(): void {
    this.examDialog = false;
  }
}
