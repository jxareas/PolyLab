import { Component, OnInit } from '@angular/core';
import { Country } from '../../model/country';
import { LabelService, MdsTableComponent } from 'mds-light';
import { CountryService } from '../../service/country.service';

@Component({
  selector: 'jx-country-table',
  templateUrl: './country-table.component.html',
  styles: [],
})
export class CountryTableComponent
  extends MdsTableComponent<Country>
  implements OnInit
{
  constructor(
    private countryService: CountryService,
    labelService: LabelService,
  ) {
    super(labelService);
  }

  ngOnInit(): void {
    this.countryService.getChanges().subscribe(data => (this.items = data));
    this.countryService.findAll().subscribe(data => (this.items = data));
  }
}
