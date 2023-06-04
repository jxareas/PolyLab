import { Injectable } from '@angular/core';
import { PersistentService } from "mds-light";
import { Religion } from "../model/religion";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ReligionService extends PersistentService<Religion> {
  constructor(protected override http: HttpClient) {
    super(http, `http://localhost:8089/v1/religions`);
  }
}
