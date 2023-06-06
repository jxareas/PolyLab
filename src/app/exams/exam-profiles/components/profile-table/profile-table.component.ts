import { Component, OnInit } from "@angular/core";
import { LabelService, MdsTableComponent } from "mds-light";
import { ExamProfileService } from "../../service/exam-profile.service";
import { Profile } from "../../model/profile";

@Component({
  selector: 'jx-profile-table',
  templateUrl: './profile-table.component.html',
  styleUrls: ['./profile-table.component.sass']
})
export class ProfileTableComponent extends MdsTableComponent<Profile> implements OnInit {

  constructor(
    private profileService: ExamProfileService,
    labelService: LabelService,
  ) {
    super(labelService);
  }

  ngOnInit(): void {
    this.profileService.getChanges().subscribe(data => (this.items = data));
    this.profileService.findAll().subscribe(data => (this.items = data));
  }

}
