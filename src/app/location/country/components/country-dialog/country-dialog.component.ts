import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { LabelService } from 'mds-light';
import { Country } from '../../model/country';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AddOrEditCountryForm } from './model/add-or-edit-country-form';
import { catchError, switchMap, throwError } from 'rxjs';
import { CountryService } from '../../service/country.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'jx-country-dialog',
  templateUrl: './country-dialog.component.html',
  styles: [],
})
export class CountryDialogComponent implements OnInit, OnChanges {
  @Input({ required: true }) country: Country;
  countryDialog = false;
  isEditMode = false;
  statuses: any[];
  submitted = false;
  countryForm: FormGroup<AddOrEditCountryForm>;

  constructor(
    private fb: FormBuilder,
    private countryService: CountryService,
    private messageService: MessageService,
    protected labelService: LabelService,
  ) {}

  ngOnInit() {
    this.statuses = this.labelService.getDefaults();
    this.countryForm = new FormGroup<AddOrEditCountryForm>({
      countryId: new FormControl<number | null>(null),
      description: new FormControl<string>('', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
      status: new FormControl<number>(1, { nonNullable: true }),
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    this.countryForm.reset()
    if (changes['country'] && this.isEditMode) {
      this.populateForm();
    }
  }

  private populateForm() {
    this.countryForm?.patchValue({
      countryId: this.country.countryId,
      description: this.country.description,
      status: this.country.status,
    });
  }

  saveOrEditCountry(): void {
    if (this.isEditMode) {
      this.updateCountry();
    } else this.saveCountry();
  }

  saveCountry() {
    if (this.countryForm.valid) {
      const countryData = this.countryForm.value as Country;
      this.countryService
        .save(countryData)
        .pipe(
          switchMap(() => this.countryService.findAll()),
          catchError(error => {
            this.displayErrorMessage();
            return throwError(error);
          }),
        )
        .subscribe(data => {
          this.countryService.setChanges(data);
          this.displaySuccessMessage(`Added ${countryData.description}`);
          this.hideDialog();
        });
    }
  }

  updateCountry() {
    if (this.countryForm.valid) {
      const countryData = this.countryForm.value as Country;
      // eslint-disable-next-line
      this.countryService.update(countryData.countryId as number, countryData)
        .pipe(
          switchMap(() => this.countryService.findAll()),
          catchError(error => {
            this.displayErrorMessage();
            return throwError(error);
          }),
        )
        .subscribe(data => {
          this.countryService.setChanges(data);
          this.displaySuccessMessage(`Updated ${countryData.description}`);
          this.hideDialog();
        });
    }
  }

  private displayErrorMessage(): void {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'An error occurred while saving the country.',
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
    this.countryDialog = true;
  }

  hideDialog(): void {
    this.countryDialog = false;
  }
}
