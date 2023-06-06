import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { Gender } from "../../model/gender";
import { AddOrEditGenderForm } from "./model/add-or-edit-gender-form";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { MessageService } from "primeng/api";
import { LabelService } from "mds-light";
import { GenderService } from "../../service/gender.service";
import { catchError, switchMap, throwError } from "rxjs";

@Component({
  selector: 'jx-gender-dialog',
  templateUrl: './gender-dialog.component.html',
  styleUrls: ['./gender-dialog.component.scss']
})
export class GenderDialogComponent implements OnInit, OnChanges {
  @Input({required : true}) gender: Gender;
  genderDialog = false;
  isEditMode = false;
  statuses: any[];
  submitted = false;
  genderForm: FormGroup<AddOrEditGenderForm>;

  constructor(
    private fb: FormBuilder,
    private genderService: GenderService,
    private messageService: MessageService,
    protected labelService: LabelService,
  ) {}

  ngOnInit() {
    this.statuses = this.labelService.getDefaults();
    this.genderForm  = new FormGroup<AddOrEditGenderForm>({
      genderId: new FormControl<number | null>(null),
      description: new FormControl<string>('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.genderForm.reset()
    if (changes['gender'] && this.isEditMode) {
      this.populateForm();
    }
  }

  saveOrEditGender(): void {
    if (this.isEditMode) {
      this.updateGender();
    } else this.saveGender();
  }

  private populateForm() {
    this.genderForm?.patchValue({
      genderId: this.gender.genderId,
      description: this.gender.description,
    });
  }

  saveGender() {
    if (this.genderForm.valid) {
      const countryData = this.genderForm.value as Gender;
      this.genderService
        .save(countryData)
        .pipe(
          switchMap(() => this.genderService.findAll()),
          catchError(error => {
            this.displayErrorMessage();
            return throwError(error);
          }),
        )
        .subscribe(data => {
          this.genderService.setChanges(data);
          this.displaySuccessMessage(`Added ${countryData.description}`);
          this.hideDialog();
        });
    }
  }

  updateGender() {
    if (this.genderForm.valid) {
      const genderData = this.genderForm.value as Gender;
      // eslint-disable-next-line
      this.genderService.update(genderData.genderId as number, genderData)
        .pipe(
          switchMap(() => this.genderService.findAll()),
          catchError(error => {
            this.displayErrorMessage();
            return throwError(error);
          }),
        )
        .subscribe(data => {
          this.genderService.setChanges(data);
          this.displaySuccessMessage(`Updated ${genderData.description}`);
          this.hideDialog();
        });
    }
  }

  private displayErrorMessage(): void {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'An error occurred while saving the gender.',
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
    this.genderDialog = true;
  }

  hideDialog(): void {
    this.genderDialog = false;
  }
}
