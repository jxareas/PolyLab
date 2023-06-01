import { Component, Input, OnInit } from '@angular/core';
import { LabelService } from '../../../../../../projects/mds-light/src/lib/service/labels/label.service';
import { Country } from '../../model/country';
import { CountryService } from '../../service/country.service';
import { catchError, switchMap, throwError } from "rxjs";
import { MessageService } from "primeng/api";

@Component({
  selector: 'jx-country-dialog',
  templateUrl: './country-dialog.component.html',
  styles: [],
})
export class CountryDialogComponent implements OnInit {
  @Input({ required: true }) country: Country;
  countryDialog = false;
  submitted = false;
  statuses: any[] = [];

  constructor(
    private countryService: CountryService,
    private messageService: MessageService,
    private labelService: LabelService,
  ) {}

  ngOnInit(): void {
    this.statuses = this.labelService.getDefaults();
  }

  openDialog(): void {
    this.countryDialog = true;
  }

  saveCountry(): void {
    this.submitted = true;
    // TODO: Implement saveCountry logic
    this.countryService
      .save(this.country)
      .pipe(
        switchMap(() => this.countryService.findAll()),
        catchError((error) => {
          alert(error.message)
          this.displayErrorMessage();
          return throwError(error);
        })
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
