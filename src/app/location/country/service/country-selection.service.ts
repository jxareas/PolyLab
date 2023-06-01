import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Country } from '../model/country';

@Injectable({
  providedIn: 'root',
})
export class CountrySelectionService {
  private selectedCountries = new BehaviorSubject<Country[]>([]);

  getSelectedCountries(): Observable<Country[]> {
    return this.selectedCountries.asObservable();
  }

  addSelectedCountry(country: Country) {
    const currentSelection = this.selectedCountries.value;
    const updatedSelection = [...currentSelection, country];
    this.selectedCountries.next(updatedSelection);
  }

  removeSelectedCountry(country: Country) {
    const currentSelection = this.selectedCountries.value;
    const updatedSelection = currentSelection.filter(
      c => c.countryId !== country.countryId,
    );
    this.selectedCountries.next(updatedSelection);
  }
}
