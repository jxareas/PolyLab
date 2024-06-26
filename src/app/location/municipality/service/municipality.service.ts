import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Municipality } from "../model/municipality";
import { PersistentService } from "mds-light";

@Injectable()
export class MunicipalityService extends PersistentService<Municipality> {

  constructor(protected override http: HttpClient) {
    super(http, `http://localhost:8086/v1/municipalities`);
  }

}
