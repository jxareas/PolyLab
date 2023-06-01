import { Component, OnInit } from '@angular/core';
import { LabelService } from '../../../../../../projects/mds-light/src/lib/service/labels/label.service';
import { Country } from '../../model/country';
import { CountryService } from '../../service/country.service';
import { catchError, switchMap, throwError } from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'jx-country-dialog',
  templateUrl: './country-dialog.component.html',
  styles: [],
})
export class CountryDialogComponent implements OnInit {
  country: Country;
  countryDialog = false;
  submitted = false;
  isEdit: boolean;
  statuses: any[] = [];

  constructor(
    private countryService: CountryService,
    private messageService: MessageService,
    private labelService: LabelService,
  ) {}

  ngOnInit(): void {
    this.statuses = this.labelService.getDefaults();
  }

  openDialog(country: Country): void {
    this.country = country;
    this.countryDialog = true;
    const isCreation = this.country.countryId == null;
    this.isEdit = !isCreation;
    console.log(this.isEdit);
  }

  saveOrEditCountry(): void {
    this.submitted = true;
    // TODO: Implement saveCountry logic
    if (this.isEdit) {
      this.updateCountry();
    } else this.saveCountry();
  }

  saveCountry(): void {
    this.countryService
      .save(this.country)
      .pipe(
        switchMap(() => this.countryService.findAll()),
        catchError(error => {
          this.displayErrorMessage();
          return throwError(error);
        }),
      )
      .subscribe(data => {
        this.countryService.setCountryChange(data);
        this.displaySuccessMessage(`Added ${this.country.description}`);
        this.hideDialog();
      });
  }

  updateCountry(): void {
    this.submitted = true;
    this.countryService
      .update(<number>this.country.countryId, this.country)
      .pipe(
        switchMap(() => this.countryService.findAll()),
        catchError(error => {
          this.displayErrorMessage();
          return throwError(error);
        }),
      )
      .subscribe(data => {
        this.countryService.setCountryChange(data);
        this.displaySuccessMessage(`Added ${this.country.description}`);
        this.hideDialog();
      });
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

  hideDialog(): void {
    this.countryDialog = false;
  }
  getColor(countryStatus: number): string {
    return this.labelService.getColor(countryStatus);
  }

  getLabel(countryStatus: number): string {
    return this.labelService.getTag(countryStatus);
  }
}
