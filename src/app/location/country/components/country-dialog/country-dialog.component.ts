import { Component, Input, OnInit } from '@angular/core';
import { LabelService } from '../../../../../../projects/mds-light/src/lib/service/labels/label.service';
import { Country } from '../../model/country';

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

  constructor(private labelService: LabelService) {}

  ngOnInit(): void {
    this.statuses = this.labelService.getDefaults();
  }

  openDialog(): void {
    this.countryDialog = true;
  }

  saveCountry(): void {
    this.submitted = true;
    // TODO: Implement saveCountry logic
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
