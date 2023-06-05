import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { PersistentService } from "mds-light";
import { Profession } from "../model/profession";

@Injectable()
export class ProfessionService extends PersistentService<Profession> {
  constructor(protected override http: HttpClient) {
    super(http, `http://localhost:8088/v1/professions`);
  }
}
