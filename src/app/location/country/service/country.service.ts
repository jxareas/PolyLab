import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../model/country';
import { PersistentService } from "../../../../../projects/mds-light/src/lib/service/persistence/persistent.service";
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CountryService extends PersistentService<Country> {

  private examChange = new Subject<Country[]>();
  constructor(protected override http: HttpClient) {
    super(http, `http://localhost:8081/v1/countries`);
  }

  setCountryChange(data: Country[]) {
    this.examChange.next(data);
  }

  getCountryChange() {
    return this.examChange.asObservable();
  }
}
