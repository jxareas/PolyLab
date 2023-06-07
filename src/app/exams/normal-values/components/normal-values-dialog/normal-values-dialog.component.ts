import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { catchError, switchMap, throwError } from 'rxjs';
import {
  FormBuilder,
  FormGroup,
} from '@angular/forms';
import { NormalValues } from '../../model/normal-values';
import { LabelService } from 'mds-light';
import { MessageService } from 'primeng/api';
import { NormalValuesService } from '../../service/normal-values.service';
import { AddOrEditNormalValues, DefaultAddOrEditNormalValues } from "./model/add-or-edit-normal-values-form";
import { ExamService } from '../../../exam/service/exam.service';
import { GenderService } from '../../../../categories/gender/service/gender.service';

@Component({
  selector: 'jx-normal-values-dialog',
  templateUrl: './normal-values-dialog.component.html',
  styleUrls: ['./normal-values-dialog.component.scss'],
})
export class NormalValuesDialogComponent implements OnInit, OnChanges {
  @Input() normalValues: NormalValues;
  normalValuesDialog = false;
  isEditMode = false;
  statuses: any[];
  exams: any[];
  genders: any[];
  submitted = false;
  normalValuesForm: FormGroup<AddOrEditNormalValues>;

  constructor(
    private fb: FormBuilder,
    private normalValuesService: NormalValuesService,
    private examService: ExamService,
    private genderService: GenderService,
    private messageService: MessageService,
    protected labelService: LabelService,
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    this.normalValuesForm.reset();
    if (changes['normalValues'] && this.isEditMode) {
      this.populateForm();
    }
  }

  ngOnInit() {
    this.statuses = this.labelService.getDefaults();
    this.normalValuesForm = DefaultAddOrEditNormalValues;
    this.examService.findAll().subscribe(exam => {
      this.exams = exam.map(exam => ({
        label: exam.description,
        value: exam.examId,
      }));
    });
    this.genderService.findAll().subscribe(gender => {
      this.genders = gender.map(gender => ({
        label: gender.description,
        value: gender.genderId,
      }));
    });
  }

  saveOrEditNormalValues(): void {
    if (this.isEditMode) {
      this.updateNormalValues();
    } else {
      this.saveNormalValues();
    }
  }

  private populateForm() {
    this.normalValuesForm?.patchValue({
      normalValuesId: this.normalValues.normalValuesId,
      examId: this.normalValues.examId,
      genderId: this.normalValues.genderId,
      highRange: this.normalValues.highRange,
      lowRange: this.normalValues.lowRange,
      status: this.normalValues.status,
    });
  }

  saveNormalValues() {
    if (this.normalValuesForm.valid) {
      const normalValuesData = this.normalValuesForm.value as NormalValues;
      this.normalValuesService
        .save(normalValuesData)
        .pipe(
          switchMap(() => this.normalValuesService.findAll()),
          catchError(error => {
            this.displayErrorMessage();
            return throwError(error);
          }),
        )
        .subscribe(data => {
          this.normalValuesService.setChanges(data);
          this.displaySuccessMessage(`Added Normal Values`);
          this.hideDialog();
        });
    }
  }

  updateNormalValues() {
    if (this.normalValuesForm.valid) {
      const normalValuesData = this.normalValuesForm.value as NormalValues;
      this.normalValuesService
        // eslint-disable-next-line
        .update(normalValuesData.normalValuesId as number, normalValuesData)
        .pipe(
          switchMap(() => this.normalValuesService.findAll()),
          catchError(error => {
            this.displayErrorMessage();
            return throwError(error);
          }),
        )
        .subscribe(data => {
          this.normalValuesService.setChanges(data);
          this.displaySuccessMessage(`Updated Normal Values`);
          this.hideDialog();
        });
    }
  }

  private displayErrorMessage(): void {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'An error occurred while saving the normal values.',
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
    this.normalValuesDialog = true;
  }

  hideDialog(): void {
    this.normalValuesDialog = false;
  }
}
