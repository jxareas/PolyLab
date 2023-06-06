import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Religion } from '../../model/religion';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AddOrEditReligionForm } from './model/add-or-edit-religion-form';
import { MessageService } from 'primeng/api';
import { LabelService } from 'mds-light';
import { ReligionService } from '../../service/religion.service';
import { Gender } from "../../../gender/model/gender";
import { catchError, switchMap, throwError } from "rxjs";

@Component({
  selector: 'jx-religion-dialog',
  templateUrl: './religion-dialog.component.html',
  styleUrls: ['./religion-dialog.component.scss'],
})
export class ReligionDialogComponent implements OnInit, OnChanges {
  @Input({ required: true }) religion: Religion;
  religionDialog = false;
  isEditMode = false;
  statuses: any[];
  submitted = false;
  religionForm: FormGroup<AddOrEditReligionForm>;

  constructor(
    private fb: FormBuilder,
    private religionService: ReligionService,
    private messageService: MessageService,
    protected labelService: LabelService,
  ) {}

  ngOnInit(): void {
    this.statuses = this.labelService.getDefaults();
    this.religionForm = new FormGroup<AddOrEditReligionForm>({
      religionId: new FormControl<number | null>(null),
      description: new FormControl<string>('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(30),
      ]),
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.religionForm.reset();
    if (changes['religion'] && this.isEditMode) {
      this.populateForm();
    }
  }

  private populateForm(): void {
    this.religionForm?.patchValue({
      religionId: this.religion.religionId,
      description: this.religion.description,
    });
  }

  saveOrEditReligion(): void {
    if (this.isEditMode) {
      this.updateReligion();
    } else this.saveReligion();
  }

  saveReligion() {
    if (this.religionForm.valid && !this.religionForm.pristine) {
      const countryData = this.religionForm.value as Gender;
      this.religionService
        .save(countryData)
        .pipe(
          switchMap(() => this.religionService.findAll()),
          catchError(error => {
            this.displayErrorMessage();
            return throwError(error);
          }),
        )
        .subscribe(data => {
          this.religionService.setChanges(data);
          this.displaySuccessMessage(`Added ${countryData.description}`);
          this.hideDialog();
        });
    }
  }

  updateReligion() {
    if (this.religionForm.valid) {
      const religionData = this.religionForm.value as Religion;
      // eslint-disable-next-line
      this.religionService.update(religionData.religionId as number, religionData)
        .pipe(
          switchMap(() => this.religionService.findAll()),
          catchError(error => {
            this.displayErrorMessage();
            return throwError(error);
          }),
        )
        .subscribe(data => {
          this.religionService.setChanges(data);
          this.displaySuccessMessage(`Updated ${religionData.description}`);
          this.hideDialog();
        });
    }
  }

  private displayErrorMessage(): void {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'An error occurred while saving the religion.',
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
    this.religionDialog = true;
  }

  hideDialog() {
    this.religionDialog = false;
  }
}
