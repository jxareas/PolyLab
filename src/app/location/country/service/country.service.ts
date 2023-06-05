import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../model/country';
import { PersistentService } from "mds-light";

@Injectable()
export class CountryService extends PersistentService<Country> {
  constructor(protected override http: HttpClient) {
    super(http, `http://localhost:8081/v1/countries`);
  }

}
