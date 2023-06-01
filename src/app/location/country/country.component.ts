import { Component, ViewChild } from "@angular/core";
import { CountryService } from "./service/country.service";
import { MessageService } from "primeng/api";
import { Country } from "./model/country";
import { CountryDialogComponent } from "./components/country-dialog/country-dialog.component";
import {
  MdsDeleteSingleComponent
} from "../../../../projects/mds-light/src/lib/components/delete-single/mds-delete-single.component";
import { catchError, switchMap, throwError } from "rxjs";

@Component({
  selector: "jx-country",
  templateUrl: "./country.component.html",
  styleUrls: ["./country.component.scss"]
})
export class CountryComponent {
  @ViewChild("countryDialog") countryDialog: CountryDialogComponent;
  @ViewChild("deleteCountryDialog") deleteDialog: MdsDeleteSingleComponent;

  deleteCountryDialog = false;

  deleteCountriesDialog = false;

  country: Country = {};
  // TODO : Handle selected countries

  selectedCountries: Country[] = [];

  submitted = false;

  cols: any[] = [];

  statuses: any[] = [];

  constructor(
    private countryService: CountryService,
    private messageService: MessageService
  ) {
  }

  handleSelectedCountriesChange(selectedCountries: Country[]): void {
    this.selectedCountries = selectedCountries;
  }

  confirmDelete(): void {
    this.deleteCountryDialog = false;
    this.countryService
      .delete(<number>this.country.countryId)
      .pipe(
        switchMap(() => this.countryService.findAll()),
        catchError(error => {
          this.displayErrorMessage();
          return throwError(error);
        })
      )
      .subscribe(data => {
        this.countryService.setCountryChange(data);
        this.displayDeleteMessage(this.country.description);
        this.deleteDialog.closeDialog();
      });
    this.country = {};
  }

  private displayDeleteMessage(itemName?: string): void {
    this.messageService.add({
      severity: "success",
      summary: "Successful",
      detail: `${itemName || "Country"} Deleted`,
      life: 3000
    });
  }

  private displayErrorMessage(): void {
    this.messageService.add({
      severity: "error",
      summary: "Error",
      detail: "An error occurred while deleting the country.",
      life: 3000
    });
  }

  confirmDeleteSelected(): void {
    this.deleteCountriesDialog = false;
    // TODO : Delete all the selected countries
    this.messageService.add({
      severity: "success",
      summary: "Successful",
      detail: "Countries Deleted",
      life: 3000
    });
    // TODO : Handle reset selected countries to empty
    // this.selectedCountries = [];
  }

  openNewCountryDialog() {
    this.country = {};
    this.countryDialog.openDialog();
  }

  openEditCountryDialog(country: Country): void {
    this.country = country;
    this.countryDialog.openDialog();
  }

  openDeleteCountryDialog(country: Country): void {
    this.country = country;
    this.deleteDialog.openDialog();
  }

  deleteSelectedCountries(): void {
    this.deleteCountriesDialog = true;
  }
}