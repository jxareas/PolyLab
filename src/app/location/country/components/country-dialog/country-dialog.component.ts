import { Component, Input, OnInit } from '@angular/core';
import { LabelService } from 'mds-light';
import { Country } from '../../model/country';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { AddOrEditCountryForm } from "./viewmodel/add-or-edit-country-form";
import { catchError, switchMap, throwError } from "rxjs";
import { CountryService } from "../../service/country.service";
import { MessageService } from "primeng/api";

@Component({
  selector: 'jx-country-dialog',
  templateUrl: './country-dialog.component.html',
  styles: [],
})
export class CountryDialogComponent implements OnInit {
  @Input({ required: true }) country: Country;
  countryDialog = false;
  statuses: any[];
  submitted = false;
  countryForm: FormGroup<AddOrEditCountryForm>;

  constructor(private fb: FormBuilder,
              private countryService: CountryService,
              private messageService: MessageService,
              protected labelService: LabelService) {}

  ngOnInit() {
    this.statuses = this.labelService.getDefaults();
    this.countryForm = new FormGroup<AddOrEditCountryForm>({
      description: new FormControl<string>('', [Validators.required]),
      status: new FormControl<number>(1,{nonNullable: true}),
    });
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
          })
        )
        .subscribe(data => {
          this.countryService.setChanges(data);
          this.displaySuccessMessage(`Added ${countryData.description}`);
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
      summary: 'Added Country',
      detail: message,
      life: 3000,
    });
  }

  cancel() {
    // Reset the form and close the dialog
    this.countryForm.reset();
    // Close the dialog here (you need to implement your own logic for that)
    this.countryDialog = false;
  }

  openDialog(): void {
    this.countryDialog = true;
  }

  hideDialog(): void {
    this.countryDialog = false;
  }
}
