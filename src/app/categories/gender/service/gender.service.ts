import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Gender } from "../model/gender";
import { PersistentService } from "mds-light";

@Injectable()
export class GenderService extends PersistentService<Gender> {
  constructor(protected override http: HttpClient) {
    super(http, `http://localhost:8085/v1/genders`);
  }
}
