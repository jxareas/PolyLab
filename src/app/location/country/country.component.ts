import { Component, ViewChild } from "@angular/core";
import { CountryService } from './service/country.service';
import { MessageService } from 'primeng/api';
import { Country } from './model/country';
import { CountryDialogComponent } from "./components/country-dialog/country-dialog.component";
import {
  MdsDeleteSingleComponent
} from "../../../../projects/mds-light/src/lib/components/delete-single/mds-delete-single.component";

@Component({
  selector: 'jx-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent {

  @ViewChild('countryDialog') countryDialog: CountryDialogComponent;
  @ViewChild('deleteCountryDialog') deleteDialog: MdsDeleteSingleComponent;


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
    private messageService: MessageService,
  ) {}

  handleSelectedCountriesChange(selectedCountries: Country[]): void {
    this.selectedCountries = selectedCountries;
  }

  confirmDelete(itemName: string): void {
    this.deleteCountryDialog = false;

    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail:  `${itemName} Deleted`,
      life: 3_000,
    });
    this.country = {};
  }

  confirmDeleteSelected(): void {
    this.deleteCountriesDialog = false;
    // TODO : Delete all the selected countries
    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Countries Deleted',
      life: 3000,
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
