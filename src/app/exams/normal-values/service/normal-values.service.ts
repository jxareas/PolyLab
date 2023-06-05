import { Injectable } from '@angular/core';
import { PersistentService } from "mds-light";
import { NormalValues } from "../model/normal-values";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class NormalValuesService extends PersistentService<NormalValues> {
  constructor(protected override http: HttpClient) {
    super(http, `http://localhost:8084/v1/normal-values`);
  }
}
