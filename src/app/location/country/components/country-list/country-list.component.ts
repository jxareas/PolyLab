import { Component, EventEmitter, OnInit, Output, ViewChild } from "@angular/core";
import { Country } from '../../model/country';
import { LabelService } from '../../../../../../projects/mds-light/src/lib/service/labels/label.service';
import { CountryService } from '../../service/country.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'jx-country-list',
  templateUrl: './country-list.component.html',
  styles: [],
})
export class CountryListComponent implements OnInit {
  @ViewChild('dt') dt: Table;

  countries: Country[] = [];
  private _selectedCountries: Country[];
  @Output() readonly selectedCountriesChange: EventEmitter<Country[]> = new EventEmitter<Country[]>();
  @Output() readonly editCountryAction: EventEmitter<Country> = new EventEmitter<Country>();
  @Output() readonly deleteCountryAction: EventEmitter<Country> = new EventEmitter<Country>();

  get selectedCountries(): Country[] {
    return this._selectedCountries;
  }

  set selectedCountries(value: Country[]) {
    this._selectedCountries = value;
    this.selectedCountriesChange.emit(value);
  }


  cols: any[] = [];
  rowsPerPageOptions = [5, 10, 20];

  constructor(
    private countryService: CountryService,
    private labelService: LabelService,
  ) {}

  ngOnInit(): void {
    this.countryService.getCountryChange().subscribe(() =>
      this.fetchCountries()
    );
    this.fetchCountries();
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'name', header: 'Name' },
      { field: 'status', header: 'Status' },
    ];
  }

  fetchCountries(): void {
    this.countryService.findAll().subscribe(data => {
      this.countries = data;
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  editCountry(country: Country): void {
    this.editCountryAction.emit(country);
  }

  exportCsv(): void {
    this.dt.exportCSV();
  }

  deleteSelectedCountries(): void {
      // TODO : Delete all selected countries implementation details
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  deleteCountry(country: Country): void {
    this.deleteCountryAction.emit(country);
  }

  onGlobalFilter(table: Table, event: Event): void {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    //TODO : Remove this edit country call
  }


  getColor = (countryStatus: number) =>
    this.labelService.getColor(countryStatus);

  getLabel = (countryStatus: number) =>
    this.labelService.getTag(countryStatus);
}
