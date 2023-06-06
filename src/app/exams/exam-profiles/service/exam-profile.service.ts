import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { PersistentService } from "mds-light";
import { Profile } from "../model/profile";

@Injectable()
export class ExamProfileService extends PersistentService<Profile> {
  constructor(protected override http: HttpClient) {
    super(http, `http://localhost:8084/v1/profiles`);
  }
}
