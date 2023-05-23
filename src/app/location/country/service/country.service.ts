import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../model/country';
import { countries } from "./countries";

@Injectable()
export class CountryService {
  constructor(private httpClient: HttpClient) {}

  getCountries(): Promise<Country[]> {
    return Promise.resolve(countries);
  }
}
