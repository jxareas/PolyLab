import { Component, OnInit } from '@angular/core';
import { CountryService } from './service/country.service';
import { MessageService } from 'primeng/api';
import { Country } from './model/country';
import { Table } from 'primeng/table';

@Component({
  selector: 'jx-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss'],
})
export class CountryComponent implements OnInit {
  countryDialog = false;

  deleteCountryDialog = false;

  deleteCountriesDialog = false;

  countries: Country[] = [];

  country: Country = {};

  selectedCountries: Country[] = [];

  submitted = false;

  cols: any[] = [];

  statuses: any[] = [];

  rowsPerPageOptions = [5, 10, 20];

  constructor(
    private countryService: CountryService,
    private messageService: MessageService,
  ) {}

  ngOnInit(): void {
    this.countryService.getCountries().then(countries => {
      this.countries = countries;
    });
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'name', header: 'Name' },
      { field: 'status', header: 'Status' },
    ];

    this.statuses = [
      { label: 'ENABLED', value: 1 },
      { label: 'DISABLED', value: 2 },
      { label: 'MODIFIED', value: 3 },
    ];
  }

  confirmDelete(): void {
    this.deleteCountryDialog = false;
    // TODO : Delete the country
    // Find the index of the country in the array
    const index = this.countries.findIndex(c => c.id === this.country.id);

    // If the country exists in the array, remove it
    if (index !== -1) {
      this.countries.splice(index, 1);
    }

    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Country Deleted',
      life: 3_000,
    });
    this.country = {};
  }

  editCountry(country: Country): void {
    this.country = { ...country };
    this.countryDialog = true;
  }

  deleteCountry(country: Country): void {
    this.deleteCountryDialog = true;
    this.country = { ...country };
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
    this.selectedCountries = [];
  }

  openNew(): void {
    this.country = {};
    this.submitted = false;
    this.countryDialog = true;
  }

  hideDialog() {
    this.countryDialog = false;
    this.submitted = false;
  }

  saveProduct() {
    this.submitted = true;
    this.countryDialog = false;
    this.country = {};
  }

  deleteSelectedCountries(): void {
    this.deleteCountriesDialog = true;
  }

  onGlobalFilter(table: Table, event: Event): void {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  getLabelColor(countryStatus: number): string {
    return countryStatus === 1
      ? 'instock'
      : countryStatus === 2
      ? 'lowstock'
      : countryStatus === 3
      ? 'outofstock'
      : 'unknown';
  }

  getLabelName(countryStatus: number): string {
    return countryStatus === 1
      ? 'enabled'
      : countryStatus === 2
      ? 'modified'
      : countryStatus === 3
      ? 'disabled'
      : 'unknown';
  }
}
